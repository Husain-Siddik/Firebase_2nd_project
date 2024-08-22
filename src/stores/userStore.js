
import { defineStore } from "pinia";

export const UseUserStore = defineStore('user', {
    state: () => ({
        email: '',
        password: '',
    }),
    getters: {
       // doubleCount: (state) => state.count * 2,
    },
    actions: {
        handleRegister(){
           console.log('stored succesfully');
           
        }
        
    },

})