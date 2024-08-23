import { defineStore } from "pinia";

//Auth form Firebase Config and Other nesseary item for firebase
import Auth from "@/Firebase/Firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth"
//

export const UseUserStore = defineStore('user', {
    state: () => ({

        email: '',
        password: '',
        termsChaked: false,
        ErrorREgisterUser: false,
        ErrorMassage: '',
        RegistrationToast: '',
        FaildRegistrationToast :'',

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
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                  
                    this.ErrorMassage ='';
                    this.RegistrationToast =true;
                   
                    // ...
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
                        this.RegistrationToast =false;
                        this.FaildRegistrationToast = false;
                    }, 1600);
                })

        },

    },

})