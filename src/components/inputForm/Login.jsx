import {Form} from '../inputForm/Form';
import {memo} from 'react';
import {setUser} from 'store/slices/userSlice';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginImpl = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const push = () => navigate('/');
  const mySwal = withReactContent(Swal);

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        push();
      })
      .catch(error => {
        const errorMessage = error.message;
        mySwal.fire({
          title: <p>{errorMessage}</p>,
        });
      });
  };
  return <Form title='sign in' handleSubmit={handleLogin} />;
};

export const Login = memo(LoginImpl);
