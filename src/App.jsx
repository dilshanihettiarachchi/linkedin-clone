import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home";
import { selectUser, login, logout } from "./redux/userSlice";
import { useEffect } from "react";
import { auth, db } from "./firebase";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userDoc = await getDoc(doc(db, "users", userAuth.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        
        dispatch(login({
          email: userData.email,
          uid: userData.uid,
          displayName: userData.displayName, // Use Firestore value
          currentPosition: userData.currentPosition, // Use Firestore value
          photoURL: userData.photoURL,
        }));
      }
      } else {
        dispatch(logout());
      }
    })
  },[])

  return (
        <div className="app">
          <Header />
          <Routes>
            {!user ? (
              <>
                <Route path="/" element={ <SignIn /> } />
                <Route path="/login" element={ <SignIn /> } />
                <Route path="/register" element={ <SignUp /> } />
              </>
            ) : (
              <Route path="/" element={ <Home /> } />
            )}
            <Route path="*" element={ <SignIn /> } />
          </Routes>
        </div>
  )
}

export default App
