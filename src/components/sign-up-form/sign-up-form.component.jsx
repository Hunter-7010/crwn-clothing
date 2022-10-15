import { React, useState } from "react";
import FormInput from '../../components/form-input/form-input.component'
import './sign-up-form.styles.scss'
import Button from '../../components/button/button.component'

import { createAuthUserWithEmailAndPassword,createUserDocFromAuth } from "../../utils/firebase.utils";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;


  const handleSubmit = async (event)=> {
    event.preventDefault();
    if(password !== confirmPassword){
        alert("Your password is do not match")
        return;
    }
    try {
        const {user} = await createAuthUserWithEmailAndPassword(email, password)
        await createUserDocFromAuth(user,{displayName})

        setFormFields(defaultFormFields)
    }
    catch (e){
        if(e.code === 'auth/email-already-in-use'){
            alert('Email already in use')
        }
        console.log("error",e.message);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
        <h2>Dont have an account?</h2>
      <span>Sign Up with you email</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
        label={"Display Name"}
          type="text"
          name="displayName"
          id="name"
          value={displayName}
          onChange={handleChange}
          required
        />
       
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
     
        <FormInput
        label={"Confirm Password"}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
