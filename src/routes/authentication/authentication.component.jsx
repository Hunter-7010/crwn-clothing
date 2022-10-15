import { React, useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import './authentication.styles.scss'


const Authentication = () => {

//   useEffect(() => {
//     async function fetchData() {
//       //when component first mounts use this function
//       const response = await getRedirectResult(auth);
//       if(response){
//           const userDocRef = await createUserDocFromAuth(response.user)
//       }
//     }
//     fetchData()
//   }, []);

 

  return (
    <div className="authentication-container">

      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google redirect
      </button> */}
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;
