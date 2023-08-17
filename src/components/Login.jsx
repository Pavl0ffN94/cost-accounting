import {Form} from './Form';
import {memo} from 'react';
import {setUser} from 'store/slices/userSlice';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginImpl = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const push = () => navigate('/');

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        push();
      })
      .catch(() => {
        alert('Invalid User');
      });
  };
  return <Form title='sign in' handleSubmit={handleLogin} />;
};

export const Login = memo(LoginImpl);
