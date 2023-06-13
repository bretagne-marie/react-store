import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component"
import Button from '../button/button.component'
import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email already in use, choose another one.")
            } else {
                console.error('user creation caused the following error: ', error);
            }
        }

    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up With Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" name="displayName" value={displayName} onChange={handleChange} required></FormInput>
                <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange} required></FormInput>
                <FormInput label="Password" type="password" name="password" value={password} onChange={handleChange} required></FormInput>
                <FormInput label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required></FormInput>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;