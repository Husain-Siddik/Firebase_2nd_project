import { defineStore } from "pinia";
import { signInWithEmailAndPassword ,sendPasswordResetEmail,signOut} from "firebase/auth";
import Auth from '../Firebase/Firebase.config'

// 


export const UseSignInUserStore = defineStore('SignInUser', {
    state: () => (
        {
            LogInUser: '',
            logInToast: '',
            LogInUserEmail: '',
            LogInUserPassword: '',
            LoginFaild :'',
            LoginFaildErrorMassage : '',
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
            console.log(this.LogInUserEmail, this.LogInUserPassword);

            signInWithEmailAndPassword(Auth, this.LogInUserEmail, this.LogInUserPassword)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    //console.log(user);
                    // check email is verifide or not
                    if(!user.emailVerified){
                    alert('plece verifide your email')
                    }
                    this.LogInUser = user;
                    // testing
                  
                    
                    // 
                    this.logInToast = true;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // for toast
                    this.LoginFaild =true;
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

        handleForgotPass(){
            sendPasswordResetEmail(Auth, this.LogInUserEmail)
            .then(() => {
              // Password reset email sent!
              // ..
              console.log("succesfull");
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode,errorMessage);
              
              // ..
            });

        },

        handelSignout(){
            signOut(Auth)
            .then(() => {
                // Sign-out successful.
                console.log("sing out");
                
                this.LogInUser = '';
                // 
                

              }).catch((error) => {
                // An error happened.
                console.log(error);
                
              });
            
        }
    },
   
    
})