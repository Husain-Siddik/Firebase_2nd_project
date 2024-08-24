import { defineStore } from "pinia";
import { signInWithEmailAndPassword, sendPasswordResetEmail, signOut, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import Auth from '../Firebase/Firebase.config'


// 


export const UseSignInUserStore = defineStore('SignInUser', {
    state: () => (
        {
            LogInUser: '',
            logInToast: '',
            LogInUserEmail: '',
            LogInUserPassword: '',
            LoginFaild: '',
            LoginFaildErrorMassage: '',
            //LoginData : {},

        }
    ),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {
        // increment() {
        //   this.count++
        // },
        handelLogInUser() {
            if (this.LogInUserPassword.length < 6) {
                console.log("password should be 6 charecter");
                alert("password should be 6 charecter")
                return

            }
            //console.log(this.LogInUserEmail, this.LogInUserPassword);

            signInWithEmailAndPassword(Auth, this.LogInUserEmail, this.LogInUserPassword)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    //console.log(user);
                    // check email is verifide or not
                    if (!user.emailVerified) {
                        alert('plece verifide your email')
                    }
                    this.LogInUser = user;
                    // testing


                    // 
                    this.logInToast = true;
                    
                    // ...
                })
                .catch((error) => {

                    const errorMessage = error.message;
                    //console.log(errorCode, errorMessage);
                    // for toast
                    this.LoginFaild = true;
                    // error masage
                    this.LoginFaildErrorMassage = errorMessage;

                }).finally(() => {
                    this.LogInUserEmail = "";
                    this.LogInUserPassword = '';
                    // toast showing for 1.3 second Log In succes full
                    setTimeout(() => {
                        this.logInToast = false;
                        this.LoginFaild = false
                    }, 1300);
                });

        },

        handleForgotPass() {
            sendPasswordResetEmail(Auth, this.LogInUserEmail)
                .then(() => {
                    // Password reset email sent!
                    // ..
                    //console.log("succesfull");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    //  console.log(errorCode, errorMessage);

                    // ..
                });

        },

        handelSignout() {
            signOut(Auth)
                .then(() => {
                    // Sign-out successful.

                    this.LogInUser = '';
                    // 


                }).catch((error) => {
                    // An error happened.
                    //console.log(error);

                });

        },
        //google login
        handleGoogleLogin() {
            
            const auth = getAuth();
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // IdP data available using getAdditionalUserInfo(result)
                    // .....
                    this.LogInUser = user
                    // 
                    this.logInToast = true;

                    
                    
                   

                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData?.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                    console.log(error);
                    this.LoginFaild = true;

                }).finally(()=>{
                     // toast showing for 1.3 second Log In succes full
                    setTimeout(() => {
                        this.logInToast = false;
                        this.LoginFaild = false;
                    }, 1300);
                
                    
                });
        },
        //google sign out
        // googleSignOut(){
        //     const auth = getAuth()
        //     signOut(auth).then(() => {
        //         // 
        //         this.LogInUser = '';
        //         console.log('Sign-out successful.');

        //       }).catch((error) => {
        //         // An error happened.
        //         console.log(error);

        //       });
        // },

        handelonOathStatechange() {
            onAuthStateChanged(Auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/auth.user
                    const uid = user.uid;
                    // 
                    // console.log('from on Aoiuth state change',uid,user);
                   this.LogInUser = user

                   
                    // ...
                } else {
                    // User is signed out
                    // ...
                    console.log('User is signed out');

                }
            })
        },


    },


})