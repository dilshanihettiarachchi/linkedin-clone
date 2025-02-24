import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { login } from '../redux/userSlice';
import { auth, db } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import linkedinLogo from '../images/linkedin.png';
import '../styles/SignUp.css';

export default function SignUp() {
  const [name, setName] = useState("");
  const [currentPosition, setCurrentPosition] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();

    if (!name || !currentPosition) {
      return alert("Please enter a full name and current position");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      
      await updateProfile(user, {
        displayName: name,
        photoURL: profilePic || "",
      });

      //save user details in firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        displayName: name,
        currentPosition: currentPosition,
        photoURL: profilePic || "",
      });

      //get user data from firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();
  
        dispatch(login({
          email: userData.email,
          uid: userData.uid,
          displayName: userData.displayName,
          currentPosition: userData.currentPosition,
          photoURL: userData.photoURL,
        }));
      }
      navigate("/");

    } catch(error) {
      alert(error.message);
    }
  }

  return (
    <div className="sign-up">
      <img src={linkedinLogo} alt="Logo" />
      <form onSubmit={signUp}>
        <input 
          type="text"
          placeholder="Full name" 
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Current position" 
          required
          value={currentPosition}
          onChange={(e) => setCurrentPosition(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Profile picture URL (optional)" 
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input 
          type="email"
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already a member? 
        <Link to="/login">
         <button className="sign-up-login">Sign In</button>
        </Link>
      </p>
    </div>
  )
}
