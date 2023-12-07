<script setup>
import arrowRight from './icons/arrowRight.vue';
</script>
<template>
    <div class="flex flex-col bg-black min-h-screen">
        <div class="flex m-10 mb-5 z-10 bg-white rounded-lg">
            <div class="min-h-96 w-[75%] grow flex flex-col">
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
            <div class="min-h-96 w-[25%] ml-5 mr-5 grid grid-cols-5 grow grid-rows-5">
                <span v-for="n in 25" class="rounded-xl shadow-md border cursor-pointer border-gray-400 h-14 w-14 ml-auto mr-auto mt-auto mb-auto"></span>
            </div>
        </div>
        <div class="flex ml-10 mr-10 pl-20 pr-20 pt-5 pb-5 items-center bg-white rounded-lg shadow-lg">
            <div class="min-h-96 w-[75%] grow">
                <span class="text-3xl">1 ticket 5 GEL  <arrowRight class="inline-block" /> 5 bid</span>
                <div class="flex mt-3 text-3xl">
                    <div class="flex border border-gray-400 w-min">
                        <button class="border-r border-gray-400 pl-10 pr-10 pt-3 pb-3 font-extrabold cursor-pointer">-</button>
                        <span class="pl-10 pr-10 pt-3 pb-3 text-2xl">1</span>
                        <button class="border-l border-gray-400 pl-10 pr-10 pt-3 pb-3 font-extrabold cursor-pointer">+</button>
                    </div>
                    <button class="bg-[#13032e] w-48 text-white pl-5 pr-5 pt-3 pb-3 rounded-md ml-5 text-3xl text-center">buy</button>
                </div>

            </div>
            <div class="bg-white min-h-96 w-[25%] grow">
                <div class="text-2xl gap-1 flex flex-col">
                    <div class="flex">
                        <p class="basis-0 grow">my tickets:</p>
                        <span class="border basis-0 grow text-center border-gray-400 inline-block min-w-[40px] min-h-full w-14"> 0 </span>
                    </div>
                    <div class="flex">
                        <p class="basis-0 grow">points sum: </p>
                        <span class="border text-center basis-0 grow border-gray-400 inline-block min-w-[40px] min-h-full w-14"> 0 </span>
                    </div>
                    <p class="text-center text-3xl mt-2">bids</p>
                    <div class="flex gap-3">
                        <div class="basis-0 grow gap-1 flex">
                            <p class="basis-0 grow">left: </p>
                            <span class="border basis-0 grow-[2] text-center border-gray-400 inline-block min-h-full"> 0 </span>
                        </div>
                        <div class="basis-0 grow gap-1 flex">
                            <p class="basis-0 grow">spent: </p>
                            <span class="border basis-0 grow-[2] text-center border-gray-400 inline-block min-h-full"> 0 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex m-10 mt-5 mb-5 z-10 p-20 pt-5 pb-5 bg-white max-h-[500px] overflow-scroll rounded-lg">
            <div class="min-h-96 w-[60%] grow flex flex-col">
             <p class="font-bold text-3xl">item description:</p>
             <p class="text-xl max-w-[95%] border-r border-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis et nisi possimus quam, maiores dignissimos, 
                quidem quod obcaecati ratione alias corporis aut est! 
                Aliquam laudantium expedita quod voluptas adipisci inventore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis et nisi possimus quam, maiores dignissimos, 
                quidem quod obcaecati ratione alias corporis aut est! 
                Aliquam laudantium expedita quod voluptas adipisci inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis et nisi possimus quam, maiores dignissimos, 
                quidem quod obcaecati ratione alias corporis aut est! 
                Aliquam laudantium expedita quod voluptas adipisci inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis et nisi possimus quam, maiores dignissimos, 
                quidem quod obcaecati ratione alias corporis aut est! 
                Aliquam laudantium expedita quod voluptas adipisci inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis et nisi possimus quam, maiores dignissimos, 
                quidem quod obcaecati ratione alias corporis aut est! 
                Aliquam laudantium expedita quod voluptas adipisci inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis et nisi possimus quam, maiores dignissimos, 
                quidem quod obcaecati ratione alias corporis aut est! 
                Aliquam laudantium expedita quod voluptas adipisci inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis et nisi possimus quam, maiores dignissimos, 
                quidem quod obcaecati ratione alias corporis aut est! 
                Aliquam laudantium expedita quod voluptas adipisci inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis et nisi possimus quam, maiores dignissimos, 
                quidem quod obcaecati ratione alias corporis aut est! 
                Aliquam laudantium expedita quod voluptas adipisci inventore.
            </p>
            </div>
            <div class="w-[40%] min-w-max ml-5 mr-5 mt-8 grid grid-cols-11 border-gray-400 max-h-[90%] rounded-lg overflow-y-scroll border grow">
                    <p class="border-r border-b text-2xl border-gray-400">
                        No
                    </p>
                    <p class="col-span-5 border-r border-b text-2xl border-gray-400">
                        Member
                    </p>
                    <p class="col-span-5  border-b text-2xl border-gray-400">
                        Points
                    </p>
                <template v-for="n in 100">
                    <p class="border-r border-gray-400 text-center">
                        1
                    </p>
                    <p class="col-span-5 border-r border-gray-400 text-center">
                        somebodyUnknown
                    </p>
                    <p class="col-span-5 text-center">
                        1268
                    </p>
                </template>
            </div>
        </div>
    </div>
</template>