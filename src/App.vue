<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const router = useRouter();
const checkLogin = ref(false);
const checklogout = ref(false);

onMounted(() => {
  if (localStorage.getItem('reloaded')) {
    // The page was just reloaded. Clear the value from local storage
    // so that it will reload the next time this page is visited.
    localStorage.removeItem('reloaded');
  } else {
    // Set a flag so that we know not to reload the page twice.
    localStorage.setItem('reloaded', '1');
    location.reload();
  }
  
  initFlowbite();

  const mobileMenuButton = document.getElementById("toggleMobileMenuButton");
  const mobileMenu = document.getElementById("toggleMobileMenu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // 监听点击菜单内部的项，点击后自动关闭菜单
    mobileMenu.querySelectorAll("a").forEach(item => {
      item.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
  
  checkLogin.value = false;
  checklogout.value = false;
  if(localStorage.getItem("userName") != null) {
      checkLogin.value = true;
  }
})


const logout = () => {
  checklogout.value = true;
  localStorage.removeItem("userName");
  setTimeout(() => {
    location.reload();
    router.push('/');
  }, 1000);
}


</script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <div>
      <header tabindex="-1" class="antialiased fixed top-0 start-0 w-full bg-white dark:bg-gray-900 z-index-100">
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
          <div class="flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center">
              <router-link to="/">
                <a href="#">
                  <svg class="w-8 h-8 mr-3 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m8 12 2 2 5-5m4.5 5.3 1-.9a2 2 0 0 0 0-2.8l-1-.9a2 2 0 0 1-.6-1.4V7a2 2 0 0 0-2-2h-1.2a2 2 0 0 1-1.4-.5l-.9-1a2 2 0 0 0-2.8 0l-.9 1a2 2 0 0 1-1.4.6H7a2 2 0 0 0-2 2v1.2c0 .5-.2 1-.5 1.4l-1 .9a2 2 0 0 0 0 2.8l1 .9c.3.4.6.9.6 1.4V17a2 2 0 0 0 2 2h1.2c.5 0 1 .2 1.4.5l.9 1a2 2 0 0 0 2.8 0l.9-1a2 2 0 0 1 1.4-.6H17a2 2 0 0 0 2-2v-1.2c0-.5.2-1 .5-1.4Z" />
                  </svg>
                </a>
              </router-link>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">August Wang</span>
            </div>
            <div class="flex items-center lg:order-2">

              <!-- Apps -->
              <button type="button" data-dropdown-toggle="apps-dropdown"
                class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <span class="sr-only">View notifications</span>
                <!-- Icon -->
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 18 18">
                  <path
                    d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                id="apps-dropdown">
                <div
                  class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  Apps
                </div>
                <div class="grid grid-cols-3 gap-4 p-4">
                  <router-link to="/Login">
                  <a href="Login" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
                    <svg
                      class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                      <path
                        d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                      <path
                        d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                    </svg>
                    
                    <div class="text-sm font-medium text-gray-900 dark:text-white">Login</div>
                  </a>
                    </router-link>
                  <!-- <a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
                    <svg
                      class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                      <path
                        d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
                      <path
                        d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                    </svg>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">Inbox</div>
                  </a> -->
                  <router-link to="/AboutMe">
                    <a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
                      <svg
                        class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div class="text-sm font-medium text-gray-900 dark:text-white">Profile</div>
                    </a>
                  </router-link>
                  <!-- <a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
                    <svg
                      class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                    </svg>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">Settings</div>
                  </a> -->
                  <a href="#" @click="logout" v-show="checkLogin" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
                    <svg
                      class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                    </svg>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">Logout</div>
                  </a>
                </div>
              </div>
    
              <span class="hidden mx-2 w-px h-5 bg-gray-200 dark:bg-gray-600 lg:inline"></span>

              <!-- FAQ link -->
               <router-link to="/Contact">
              <button type="button" data-tooltip-target="tooltip-faq"
                class="hidden p-2 text-gray-500 rounded-lg lg:inline-block hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <span class="sr-only">
                  FAQ
                </span>
                <!-- Icon -->
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                </svg>
              </button>
              </router-link>
              <div id="tooltip-faq" role="tooltip"
                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                <router-link to="/Contact">
                  <a href="#" class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                    aria-current="page">FAQ</a>
                </router-link>
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>

               

              <button type="button" id="toggleMobileMenuButton" data-collapse-toggle="toggleMobileMenu"
                class="items-center p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <span class="sr-only">Open menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <nav id="toggleMobileMenu" class=" bg-white lg:bg-gray-50 lg:dark:bg-gray-800 dark:bg-gray-900 lg:block">
          <div class="px-0 lg:py-3 lg:px-6">
            <div class="flex items-center">
              <ul class="flex flex-col mt-0 w-full text-sm font-medium lg:mr-6 lg:flex-row">
                <li class="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <router-link to="/AboutMe">
                    <a href="#" class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
                      aria-current="page">About Me</a>
                  </router-link>
                </li>
                <li class="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <router-link to="/SideProject">
                    <a href="#"
                      class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Side
                      Project</a>
                  </router-link>
                </li>
                <li class="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <router-link to="/Experience">
                    <a href="#"
                      class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Experience</a>
                  </router-link>
                </li>
                <li class="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <router-link to="/Education">
                    <a href="#"
                      class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Education</a>
                  </router-link>
                </li>
                <li class="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <router-link to="/Thesis">
                    <a href="#"
                      class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Thesis</a>
                  </router-link>
                </li>
                <li class="block border-b dark:border-gray-700 lg:inline lg:border-b-0 lg:mr-8">
                  <router-link to="/Contact">
                  <a href="#"
                    class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Contact
                    Me</a>
                </router-link>
              </li>
              <li class="block lg:inline">
                <router-link to="/Support">
                  <a href="#"
                    class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Support
                    Me</a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>

  <div v-show="checklogout" id="toast-default" class="fixed top-32 right-25 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
            </svg>
            <span class="sr-only">Fire icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">logout success !</div>
    </div>

  <div class="w-full h-100 max-w-full pt-10 bg-white dark:bg-gray-900 flex justify-center items-center">
    <RouterView />
  </div>

  <div id="informational-banner" tabindex="-1" class="fixed bottom-0 start-0 z-50 flex flex-col justify-center w-full p-2 border-b border-gray-200 md:flex-row bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <footer class="border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="w-full mx-auto text-center max-w-screen-xl md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://www.augustwang.com"
            class="hover:underline">August Wang</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  </div>
  
</div>
</template>

<style scoped>
.container {
  width: 100vw;
}
.z-index-100{
  z-index: 100;
}
</style>
