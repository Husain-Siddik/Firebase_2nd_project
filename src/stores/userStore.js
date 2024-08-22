import { defineStore } from "pinia";

//Auth form Firebase Config and Other nesseary item for firebase
import Auth from "@/Firebase/Firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth"
//

export const UseUserStore = defineStore('user', {
    state: () => ({

        email: '',
        password: '',
        succesRegistretion: false,
        ErrorREgisterUser: false,
        ErrorMassage: '',

    }),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {

        handleRegister() {
            if(this.password.length < 6){
             //Error mssage
             this.ErrorMassage =" Password Should At Least 6 Charrecter"
             console.log(this.ErrorMassage);
 
             return

            }
 

            //Create An user 
            createUserWithEmailAndPassword(Auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    //for registration succes massage
                    this.succesRegistretion = true;
                    this.ErrorREgisterUser = false;
                    // ...
                })
                .catch((error) => {
                    //const errorCode = error.code;
                    this.ErrorMassage = error.message;
                    // ..
                    console.log(error);
                    this.ErrorREgisterUser = true;
                    this.succesRegistretion = false;

                })
                .finally(() => {
                    console.log('From data removed');
                    this.email = '';
                    this.password = '';
                    //this.succesRegistretion = false;
                    //this.ErrorREgisterUser = false;

                })






        },

    },

})