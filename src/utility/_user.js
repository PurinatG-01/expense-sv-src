import { auth, googleProvider } from '../config/firebase/firebase'
import { authState } from 'rxfire/auth';

export const _login = () => {
    auth.signInWithPopup(googleProvider)
}

export const _logout = () => {
    auth.signOut()
}

export const _authState = authState(auth)