<template>
  <div>
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Registration Here!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <!-- form -->

          <form v-on:submit.prevent="store.handleRegister">

            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input v-model="store.email" type="email" name="name" placeholder="email" class="input input-bordered"
                  required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input v-model="store.password" type="password" placeholder="password" class="input input-bordered"
                  required />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Register</button>
              </div>
            </div>

          </form>

          <!--  -->
          <!-- Open the modal using ID.showModal() method -->

          <!--  -->
          <div class="flex items-center justify-center">
            <p>Allredy have an account ?</p>
            <p class="btn btn-link">
              <router-link to="/login">login</router-link>
            </p>
          </div>
          <div class="flex items-center justify-center py-2">
            <button class="btn btn-outline btn-secondary">
              Register with google
            </button>
          </div>

          <!-- succes massage -->
          <div v-if="store.succesRegistretion">
            <div role="alert" class="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Succesfully Register User!</span>
            </div>
          </div>
          <!--  -->
          <!--Registration error massage  -->
          <div role="alert" class="alert alert-error" v-if="store.ErrorREgisterUser ||store.ErrorMassage ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Error! {{ store.ErrorMassage }}</span>
          </div>
          <!--  -->



        </div>
      </div>


    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { UseUserStore } from '../stores/userStore'
const store = UseUserStore()

// const email =ref('');
//  const password=ref(''); 


</script>
