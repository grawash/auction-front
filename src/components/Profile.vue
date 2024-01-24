<script setup>
import pastAuctions from './pastAuctions.vue';
import ongoingAuctions from './ongoingAuctions.vue';
import accountDetails from './accountDetails.vue';

import { ref } from 'vue';

const profileViewState = ref("ongoing auctions")
</script>
<template>
    <div class="bg-slate-600 flex flex-col h-screen min-h-screen">
        <div class="p-10 flex h-[90%] mt-auto mb-auto gap-5">
            <div class="grow flex flex-col gap-5 shrink basis-0 min-w-fit">

                <div class="bg-slate-400 h-52 w-52">
                    <img src="" alt="" >
                </div>
                <div class="mb-5">
                    <p class="text-yellow-400 text-3xl pb-5">Username</p>
                    <p class="text-yellow-400 text-xl hover:cursor-pointer hover:scale-105" @click="profileViewState = 'account details'">account details</p>
                </div>
                <p class="text-yellow-400 text-3xl">your auctions</p>
                <div class="h-[1px] bg-white rounded-3xl w-[70%]"></div>
                <p class="text-yellow-400 text-xl hover:cursor-pointer hover:scale-105" @click="profileViewState = 'ongoing auctions'">ongoing auctions</p>
                <p class="text-yellow-400 text-xl hover:cursor-pointer hover:scale-105" @click="profileViewState = 'past auctions'">past auctions</p>
            </div>
            <div class="grow-[4] basis-0 flex flex-col">
                <p class="text-yellow-400 text-3xl pb-5 ml-auto">{{ profileViewState }}</p>
                <pastAuctions v-if="profileViewState == 'past auctions'" />
                <ongoingAuctions v-if="profileViewState == 'ongoing auctions'" />
                <accountDetails v-if="profileViewState == 'account details'" />
            </div>

        </div>
    </div>
</template>