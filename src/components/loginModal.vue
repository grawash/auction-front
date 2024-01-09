<script setup>
import { ref } from 'vue';

const registerModal = ref(false)
</script>
<template>
      <div @click="$emit('closeModal')" class="fixed w-full h-screen flex z-50 bg-black bg-opacity-60">
        <div @click.stop class="relative ml-auto mr-auto mt-auto mb-auto w-[50%] h-[80%] bg-white flex flex-col">
            <div class="flex flex-col justify-between gap-10 w-[70%] h-[80%] ml-auto mr-auto mt-auto mb-auto text-xl">
                <p class="text-5xl ml-auto mr-auto mb-3" v-if="!registerModal">sign in</p>
                <p class="text-5xl ml-auto mr-auto mb-3" v-if="registerModal">sign up</p>
                <div class="flex flex-col gap-10">
                    <div class="flex" v-if="registerModal">
                        <input type="text" name="username" id="username" placeholder="username" class="border grow h-12">
                    </div>
                    <div class="flex">
                        <input type="email" name="email" id="email" placeholder="email" class="border grow h-12">
                    </div>
                    <div class="flex">
                        <input type="password" name="password" id="password" placeholder="password" class="border grow h-12">
                    </div>
                    <div class="flex" v-if="registerModal">
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" class="border grow h-12">
                    </div>
                    <button class="bg-[#13032e] text-white p-2 pl-2 pr-2 w-full rounded-md ml-auto mr-auto mt-auto text-center cursor-pointer" v-if="!registerModal">sign in</button>
                    <button class="bg-[#13032e] text-white p-2 pl-2 pr-2 w-full rounded-md ml-auto mr-auto mt-auto text-center cursor-pointer" v-if="registerModal">sign up</button>

                </div>
                <p class="ml-auto mr-auto underline text-[#13032e]" v-if="!registerModal">forgot password?</p>
            </div>
            <p href="" class="ml-auto mr-auto  border-t w-full text-center p-5" v-if="!registerModal">don't have an account? <span class="underline text-[#13032e] cursor-pointer" @click="registerModal = true">sign up</span></p>
            <p href="" class="ml-auto mr-auto  border-t w-full text-center p-5" v-if="registerModal">already have an account? <span class="underline text-[#13032e] cursor-pointer" @click="registerModal = false">sign in</span></p>

        </div>
      </div>
</template>