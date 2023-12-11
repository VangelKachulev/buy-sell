import { defineStore } from 'pinia';


export const useUserStore = defineStore('user', {
    state: () => {

        return {
            userData: null,

        }
    },
    actions: {
        setUserData(userInput) {
            this.userData = userInput;
           
            // console.log(this.userData);
        },
        getData() {
            return this.userData
        },
        cleanData() {


            return this.userData = null





        },
    }
})