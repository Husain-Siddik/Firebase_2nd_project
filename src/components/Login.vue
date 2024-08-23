<template>
  <div>
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

          <!-- from here -->
          <form v-on:submit.prevent="store.handelLogInUser">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" class="input input-bordered" required
                  v-model="store.LogInUserEmail" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <!-- password  -->
                <div class="relative inline-block">

                  <input type="password" name="password" placeholder="password" class="input input-bordered w-full"
                    v-model="store.LogInUserPassword" v-if="!showPass" required />
                  <!--  -->
                  <input type="text" name="password" placeholder="password" class="input input-bordered w-full"
                    v-model="store.LogInUserPassword" v-if="showPass" required />


                  <span class="absolute ml-[-2rem] mt-3" @click="ShowPassword">
                    <div v-if="showPass">
                      <GlEye></GlEye>
                    </div>
                    <div v-if="!showPass">
                      <GlEyeSlash></GlEyeSlash>
                    </div>
                  </span>
                </div>
                <!--  -->
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                  <a class="btn btn-link"> <router-link to="/registration">Create An Account</router-link></a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>

            </div>
            <!-- from end -->
          </form>
          {{ store.LogInUsername }}
          <!-- toster massage -->
          <div v-if="store.logInToast">
            <div class="toast toast-top toast-center">
              <div class="alert alert-success">
                <span>Login Succesfull.</span>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { GlEye, GlEyeSlash } from '@kalimahapps/vue-icons'
import { UseSignInUserStore } from '../stores/SignInUserStore'
const store = UseSignInUserStore()
const showPass = ref(false)

// for hiding showing pass

function ShowPassword() {
  showPass.value = !showPass.value
}

</script>

<style></style>