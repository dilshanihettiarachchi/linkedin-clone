import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { login } from '../redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import '../styles/SignIn.css';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();

        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: userData.displayName,
          currentPosition: userData.currentPosition,
          photoURL: user.photoURL,
        }));
        navigate("/");
      } else {
        alert("user is not exist");
      }
  
      

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="sign-in">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png?20170711102837" alt="Logo" />
      <form onSubmit={signIn}>
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
        <button type="submit">Sign In</button>
      </form>
      <p>
        Not a member? 
        <Link to="/register">
          <button className="sign-in-register">Sign Up</button>
        </Link>
      </p>
    </div>
  )
}
