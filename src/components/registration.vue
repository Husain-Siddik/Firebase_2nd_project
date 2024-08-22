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
              <input
          v-model="store.email"
                type="email"
                name="name"
                placeholder="email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
              v-model="store.password"
                type="password"
                placeholder="password"
                class="input input-bordered"
                required
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover"
                  >Forgot password?</a
                >
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </div>

         </form>


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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {UseUserStore} from '../stores/userStore'
const store = UseUserStore()

// const email =ref('');
//  const password=ref(''); 


</script>
