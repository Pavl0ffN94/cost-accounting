import {useSelector} from 'react-redux';

export function useAuth() {
    const email = useSelector(state => state.users.email);

    return {
        isAuth: !!email,
        email,
    }
}