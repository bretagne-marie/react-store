import { useState } from "react";
import { signInWithGooglePopUp, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import Button from '../../components/button/button.component'
import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password. Please try again.');
                    break;
                case 'auth/user-not-found':
                    alert('Email does not exist. Please sign up or try again.');
                    break;
                default:
                    console.error('user creation caused the following error: ', error);
            }
        }
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopUp();
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In With Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange} required></FormInput>
                <FormInput label="Password" type="password" name="password" value={password} onChange={handleChange} required></FormInput>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={'google'} onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;