
<script setup>
import { RouterLink } from 'vue-router';
import { UseSignInUserStore} from '../stores/SignInUserStore'
const store = UseSignInUserStore()
</script>

<template>
<main>
  
    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><RouterLink to ="/">Home</RouterLink></li>
        <li><RouterLink to ="/about">About</RouterLink></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li class="mx-2"><RouterLink to ="/">Home</RouterLink></li>
      <li><RouterLink to ="/about">About</RouterLink></li>
      
    </ul>
  </div>
  <div class="navbar-end">
    <!-- profile buton added -->
      <div class="flex gap-3">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <!-- after log  in profile icon change -->
        <div  v-if="!store.LogInUser" class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        <div v-if="store.LogInUser" class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            :src=store.LogInUser?.photoURL />
        </div>
        <!--  -->
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <!-- User only see profile if loged in -->
         <div v-if="store.LogInUser">
          <a class="justify-between">
           <router-link to="/profile">Profile</router-link>
            <span class="badge">New</span>
          </a>
         </div>
        </li>
        <li><RouterLink to="/login">LogIn</RouterLink></li>
        <li><a>Logout</a></li>
        
      </ul>
    </div>
  </div>
     <!--  profle button finished -->
     
  </div>
</div>
</main>
</template>
