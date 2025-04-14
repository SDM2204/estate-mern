import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';// Import your CSS file for styling

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
    <button onClick={handleGoogleClick}
    type='button' className='oauth-button self-center'>
    <span className='oauth-text'>Continue with Google</span>
  <span className='oauth-shape oauth-shape-1'></span>
  <span className='oauth-shape oauth-shape-2'></span>
  <span className='oauth-shape oauth-shape-3'></span>
  <span className='oauth-shape oauth-shape-4'></span>
  <span className='oauth-shadow'></span>
  </button>

  );
}