import { defineStore } from "pinia";

//Auth form Firebase Config and Other nesseary item for firebase
import Auth from "@/Firebase/Firebase.config";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth"

//

export const UseUserStore = defineStore('user', {
    state: () => ({
        fullname: '',
        photourl: '',
        email: '',
        password: '',
        termsChaked: false,
        ErrorREgisterUser: false,
        ErrorMassage: '',
        RegistrationToast: '',
        FaildRegistrationToast: '',
        UserData:{},
    }),
    getters: {
        // doubleCount: (state) => state.count * 2,

    },
    actions: {

        handleRegister() {
            // Chechaking password length before account creation 
            if (this.password.length < 6) {
                //Error mssage
                this.ErrorMassage = " Password Should At Least 6 Charrecter"
                console.log(this.ErrorMassage);
                return
            }

            // terms and condition cheack

            if (!this.termsChaked) {
                this.ErrorMassage = "please accept our terms and condition"
                return
                // return kora important ta na hole porer code run hoye jabe ..so
                //return korle ager code tekei back jabe
            }

            //Create An user 
            createUserWithEmailAndPassword(Auth, this.email, this.password)
                .then((result) => {
                    // Signed up 
                    const user = result.user;
                    this.UserData = user;
                   // console.log(this.UserData);
                    
                    
                    
                    // have to update user profile befor verification

                    updateProfile(user,
                        {
                            displayName: this.fullname, photoURL: this.photourl
                        })
                        .then(() => {
                            // Profile updated!
                            // ...
                            console.log("profile update");

                        }).catch((error) => {
                            // An error occurred
                            // ...
                            console.log(error);

                        });


                    // sent user verification email

                    sendEmailVerification(user)
                        .then(() => {
                            // Email verification sent!
                            // ...
                            console.log("sent email verification mail");
                            alert("place checke your email for verification")

                        });
                    // 

                    //    
                    this.ErrorMassage = '';
                    this.RegistrationToast = true;
                    //    



                })
                .catch((error) => {

                    this.ErrorMassage = error.message;
                    // ..

                    this.FaildRegistrationToast = true;

                })
                .finally(() => {
                    console.log('From data removed');
                    this.email = '';
                    this.password = '';
                    // showing toast for 1.6 second
                    setTimeout(() => {
                        this.RegistrationToast = false;
                        this.FaildRegistrationToast = false;
                    }, 5000);
                })

        },

    },

})