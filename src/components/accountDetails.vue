<script setup>
</script>
<template>
    <div class="bg-white h-full flex gap-3 rounded-2xl p-5">
        <div>
            <div class="bg-slate-400 h-44 w-44">
                <img src="" alt="" >
            </div>
        </div>
        <div class="relative ml-auto mr-auto w-[50%] bg-white flex flex-col">
            <div class="flex flex-col justify-between gap-10 w-[70%] ml-auto mr-auto text-xl">
                <div class="flex flex-col gap-10">
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
                    <button class="bg-[#13032e] text-white p-2 pl-2 pr-2 w-full rounded-md ml-auto mr-auto mt-auto text-center cursor-pointer">confirm changes</button>
                </div>
            </div>
        </div>
      </div>
</template>