import { defineStore } from "pinia";
import { signInWithEmailAndPassword } from "firebase/auth";
import Auth from '../Firebase/Firebase.config'

export const UseSignInUserStore = defineStore('SignInUser', {
    state: () => (
        {
            LogInUser: '',
            logInToast: '',
            LogInUserEmail: '',
            LogInUserPassword: '',

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
                    console.log(user);
                    this.LogInUser = user;
                    this.logInToast = true;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);

                }).finally(() => {
                    this.LogInUserEmail = "";
                    this.LogInUserPassword = '';
                    // toast showing for 1.3 second Log In succes full
                    setTimeout(() => {
                        this.logInToast = false;
                    }, 1300);
                });

        },

    },
})