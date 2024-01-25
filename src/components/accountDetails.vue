<script setup>
</script>
<template>
    <div class="bg-white h-full flex gap-3 rounded-2xl p-20">
        <div>
            <div class="bg-slate-400 h-44 w-44">
                <img src="" alt="" >
            </div>
        </div>
        <div class="relative ml-auto mr-auto w-[70%] flex flex-col">
            <div class="flex flex-col justify-between gap-10 w-full h-full ml-auto mr-auto text-xl">
                <div class="flex flex-col w-full h-full gap-10">
                    <div class="flex gap-3">
                        <input type="text" name="name" id="name" placeholder="name" class="grow h-12 border min-w-0">
                        <input type="text" name="lastName" id="lastName name" placeholder="last name" class="grow h-12 border min-w-0">
                    </div>
                    <div class="flex gap-3">
                        <input type="text" name="username" id="username" placeholder="username" class="grow h-12 border min-w-0">
                        <input type="email" name="email" id="email" placeholder="email" class="grow h-12 border min-w-0">
                    </div>
                    <div class="flex gap-3">
                        <input type="password" name="password" id="password" placeholder="password" class="grow h-12 border min-w-0">
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" class="grow h-12 border min-w-0">
                    </div>
                    <div class="flex gap-3">
                        <label for="img" class="shrink whitespace-nowrap">change image:</label>
                        <input type="file" id="img" name="img">
                    </div>
                    <button class="bg-[#13032e] text-white p-2 pl-2 pr-2 w-full rounded-md ml-auto mr-auto mt-auto text-center cursor-pointer">confirm changes</button>
                </div>
            </div>
        </div>
      </div>
</template>