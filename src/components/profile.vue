<script setup>
import { useRouter } from 'vue-router';
import { UseSignInUserStore } from '../stores/SignInUserStore'

const router = useRouter();
const loginStore = UseSignInUserStore()

function signOutAndRedirect(){
loginStore.handelSignout();
// beacuse router.push pinia teke call kora jay ni so component teke 
//call kore dici  
router.push('/login')
}

</script>

<template>
    <!-- <div>
        <div v-if="store.UserData">
            {{ store.UserData }}
        </div>
        <div v-if="loginStore.LogInUser">
            {{ loginStore.LogInUser }}
        </div>
    </div> -->

    <!-- Profile items-->
    <div v-if="loginStore.LogInUser" class="flex items-center justify-center my-2">
        <div class="card bg-base-100 w-96 shadow-xl mt-5 border">
            <div class="flex items-center justify-center mt-3">
                <div class="avatar ">
                    <div class="w-24 rounded-full">
                        <img :src = loginStore.LogInUser?.photoURL alt="Profile pic ">
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h2 class="text-center text-xl">Profile</h2>
                <p>Name :{{loginStore.LogInUser?.displayName }}</p>
                <p>Email : {{loginStore.LogInUser?.email}}</p>
                <br>
                <button class="btn btn-primary" v-on:click="signOutAndRedirect">log Out</button>

            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>