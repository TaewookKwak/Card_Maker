import { firebaseAuth, githubProvider, googleProvider } from './firebase'

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName)
    // const authProvider = new firebase.auth[`${providerName}AuthProvider`]()
    return firebaseAuth.signInWithPopup(authProvider)
  }

  logout() {
    firebaseAuth.signOut()
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user)
    })
  }

  createAccount(email, password) {
    return firebaseAuth.createUserWithEmailAndPassword(email, password)
  }

  loginWithEmail(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password)
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider
      case 'Github':
        return githubProvider
      default:
        throw new Error(`not supported provider : ${providerName} `)
    }
  }
}
export default AuthService
