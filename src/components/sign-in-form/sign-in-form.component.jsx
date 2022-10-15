import { React, useState } from "react";
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
import Button from '../button/button.component'

import { signInWithGooglePopup,createUserDocFromAuth,signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;


  const signInWithGoogle = async () => {
  await signInWithGooglePopup();
   
    
    
  };

  const handleSubmit = async (event)=> {
    event.preventDefault();
   
    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password)
      

    }
    catch (e){
      if(e.code ==='auth/wrong-password'){
        alert('Incorrect password')
      }
      console.log(e)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
        <h2>Already have an account?</h2>
      <span>Sign In with you email</span>
      <form onSubmit={handleSubmit}>
        
      
       
        <FormInput
        label = {"Email"}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />
   
        <FormInput
        label = {"Password"}
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          required
        />
     
     
       <div className="buttons-container">
       <Button type="submit">Sign In</Button>
        <Button type='button' onClick={signInWithGoogle} buttonType="google">Sign In with Google</Button>
       </div>

      </form>
    </div>
  );
};

export default SignInForm;
