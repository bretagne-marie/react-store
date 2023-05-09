import { signInWithGooglePopUp } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async() => {
        const response = await signInWithGooglePopUp();
        console.log(response);
    };
    
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
        </div>
    )
}

export default SignIn;