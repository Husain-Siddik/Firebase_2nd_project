import { defineStore } from "pinia";
export const UseSignInUserStore = defineStore('SignInUser', {
    state: () => (
        {
            LogInUsername: '',
            LogInUserEmail:'',
            LogInUserPassword :'',

        }
    ),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {
        // increment() {
        //   this.count++
        // },
        handelLogInUser(){
            console.log('from submitted');
            console.log(this.LogInUserEmail,this.LogInUserPassword);
            
            
        }
    },
})