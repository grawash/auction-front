<script setup>
import loginModal from '../components/loginModal.vue';
import { ref } from 'vue';

const open = ref(false)

</script>
<template>
      <loginModal @closeModal="open = false" v-if="open" />
      <header>
          <div class="flex p-10 pl-15 pr-15 bg-[#13032e] text-yellow-400">
              <p class="text-3xl font-extrabold">
                  CompanyName
              </p>
              <ul class="flex gap-5 ml-auto mr-10">
                  <li class="mt-auto mb-auto hover:scale-110 hover:cursor-pointer">all auctions</li>
                  <li class="mt-auto mb-auto hover:scale-110 hover:cursor-pointer">how do we work ?</li>
                  <li class="mt-auto mb-auto hover:scale-110 hover:cursor-pointer">faq</li>
              </ul>
              <button @click="open = true" class="bg-yellow-400 text-black p-2 pl-3 pr-3 rounded-md">log in</button>
          </div>
      </header>
</template>