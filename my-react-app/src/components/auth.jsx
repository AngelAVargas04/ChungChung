import { auth } from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';

export const Auth = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);

  const SignUp = async () => {
    try{
    await createUserWithEmailAndPassword(auth, email, password);
    } catch (err){
        console.error(err);
    }
  };
  
  return (
    <div> 
        <input placeholder="Email..." 
        onChange={(e) => setEmail(e.target.value)}
        />
        <input placeholder="Password..." 
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={SignUp}>Sign Up</button>
    </div>
  );
}