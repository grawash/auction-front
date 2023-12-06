<script setup>
</script>
<template>
    <div class="flex">
        <div class="bg-white min-h-96 w-[75%] shadow-lg grow flex flex-col">
            <div class="flex mt-10 ml-5 mr-5">
                <div class="grow-[4] basis-0 flex flex-col">
                    <div class="h-80">
                        <img src="https://iplus.com.ge/images/detailed/6/eee.001.jpeg" alt="" class="h-full object-contain">
                    </div>
                    <div class="w-[95%] ml-auto mr-auto bg-gray-300 rounded-full h-[0.60rem] mt-auto mb-2 flex">
                        <div class="bg-blue-500 h-full grow rounded-full"></div>
                        <div class="h-full grow rounded-full"></div>
                    </div>
                </div>
                <div class="mt-3 ml-2 text-2xl grow-[2] flex flex-col basis-0">
                    <p class="font-semibold overflow-y-hidden h-[150px]">Playstation 5 console (disc ver.)</p>
                    <p class=" mt-6 text-lg font-thin">auction start: 30 November 21:00</p>
                    <div class="flex text-xl mt-3">
                        <p class=" text-lg">3 days : 3 hours : 40 minutes : 22 seconds</p>
                    </div>
                    <button class="bg-[#13032e] text-white p-2 pl-2 pr-2 rounded-md w-[95%] ml-auto mr-auto mb-2 text-3xl mt-auto text-center">bid</button>
                </div>
            </div>
        </div>
        <div class="bg-white min-h-96 w-[25%] shadow-lg grid grid-cols-5 grow grid-rows-5">
            <span v-for="n in 25" class="rounded-xl shadow-md border cursor-pointer border-gray-400 h-10 w-10 ml-auto mr-auto mt-auto mb-auto"></span>
        </div>
    </div>
</template>