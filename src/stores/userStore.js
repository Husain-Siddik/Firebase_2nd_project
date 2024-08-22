import { defineStore } from "pinia";

//Auth form Firebase Config and Other nesseary item for firebase
import Auth from "@/Firebase/Firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth"
//

export const UseUserStore = defineStore('user', {
    state: () => ({

        email: '',
        password: '',

    }),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {

        handleRegister() {
            console.log('Clicked  succesfully')

            //Create An user 
            createUserWithEmailAndPassword(Auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    
                    // ...
                })
                .catch((error) => {
                    //const errorCode = error.code;
                    //const errorMessage = error.message;
                    // ..
                    console.log(error);
                    
                });




        },

    },

})