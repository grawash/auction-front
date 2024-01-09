<script setup>
</script>
<template>
      <div @click="$emit('closeModal')" class="fixed w-full h-screen flex z-50 bg-black bg-opacity-60">
        <div @click.stop class="relative ml-auto mr-auto mt-auto mb-auto w-[50%] h-[80%] bg-white flex">
            <div class="flex flex-col gap-10 w-[70%] h-[80%] ml-auto mr-auto mt-auto mb-auto text-xl">
                <p class="text-5xl ml-auto mr-auto mb-3">sign in</p>
                <div class="flex">
                    <input type="text" name="username" id="username" placeholder="username" class="border grow h-12">
                </div>
                <div class="flex">
                    <input type="email" name="email" id="email" placeholder="email" class="border grow h-12">
                </div>
                <div class="flex">
                    <input type="password" name="password" id="password" placeholder="password" class="border grow h-12">
                </div>
                <div class="flex">
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" class="border grow h-12">
                </div>
                <button class="bg-[#13032e] text-white p-2 pl-2 pr-2 w-full rounded-md ml-auto mr-auto mt-auto text-center">sign in</button>
                <a href="" class="ml-auto mr-auto underline text-[#13032e]">forgot password?</a>
            </div>
        </div>
      </div>
</template>