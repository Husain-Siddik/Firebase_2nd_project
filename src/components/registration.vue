<template>
  <div>
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left ml-10">
          <h1 class="text-5xl font-bold ">Registration Here!</h1>
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
              <!-- Fullname -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Full name</span>
                </label>
                <input v-model="store.fullname" type="text" name="Fullname" placeholder="Type your Full name here"
                  class="input input-bordered" required />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Photo Url</span>
                </label>
                <input v-model="store.photourl" type="url" name="photoUrl" placeholder="Photo Url" class="input input-bordered"
                   />
              </div>
              <!--  -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input v-model="store.email" type="email" name="name" placeholder="email" class="input input-bordered"
                  required />
              </div>
              <!--  -->

              <!--  -->

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>

                <!-- password icon inner password input fild -->
                <div class="relative inline-block ">
                  <!-- if Show password -->
                  <input v-if="!showpass" v-model="store.password" type="password" placeholder="password"
                    class="input input-bordered w-[100%] " required />
                  <!-- if hide pass this will render -->
                  <input v-if="showpass" v-model="store.password" type="text" placeholder="password"
                    class="input input-bordered w-[100%] " required />

                  <!--Icon in input fild  -->
                  <span class="absolute ml-[-30px] mt-3" @click="Showpassword">
                    <span v-if="showpass">
                      <BsEyeFill />
                    </span>
                    <span v-if="!showpass">
                      <BsEyeSlashFill />
                    </span>
                  </span>

                </div>
                <!--  -->

                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <!-- termes and Condition -->
                <div class="mt-2">
                  <input class="mr-2" type="checkbox" name="terms" id="terms" v-model="store.termsChaked">
                  <label for="terms">Accept <a href=""></a> Our Terms and Condition</label>
                </div>
                <!--  -->
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Register</button>
              </div>
            </div>

          </form>

          <!--  -->

          <!--  -->
          <div class="flex items-center justify-start ml-8">
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
          <!-- toast -->
          <div>
            <div class="toast toast-top toast-center">
              <div v-if="store.RegistrationToast" class="alert alert-success">
                <span>Registration Succesfull.</span>
              </div>
              <div v-if="store.FaildRegistrationToast" class="alert alert-info bg-red-800 text-center">
                <span class="text-white text-lg ">Registration faild.</span>
                <br>
                <span>{{ store.ErrorMassage }}</span>
              </div>
            </div>
          </div>
          <!-- registration faild toast -->

          <!--  -->


        </div>
      </div>


    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { BsEyeSlashFill, BsEyeFill } from '@kalimahapps/vue-icons';

import { UseUserStore } from '../stores/userStore'
const store = UseUserStore()

// const email =ref('');
const showpass = ref(false);
//  const password=ref('');

function Showpassword() {

  showpass.value = !showpass.value;
  console.log(showpass.value);

}


</script>
