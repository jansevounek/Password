
import { BIconWindow } from 'bootstrap-icons-vue';

import { BIcon0Circle } from 'bootstrap-icons-vue';
<template>
    <div>
        <div class="homepage-text px-6 text-left mt-12" v-motion-slide-visible-once-bottom>
            <h1 class="text-[50px] break-words">The Best</h1>
            <h1 class="text-[50px] break-words">Password</h1>
            <h1 class="text-[50px] break-words">Manager</h1>
            <p class="text-[15px] text-gray-400 mt-6">
                The best password manager for your needs. <br />
                Keep your passwords safe and secure.
            </p>
        </div>
        <div class="homepage-text mt-32 p-6 bg-primary p-primary text-end">
            <h1 class="text-[50px] break-words mt-10">
                <VueTypewriterEffect :strings="['Download', 'now!', 'Download Now!']" />
            </h1>
            <p class="text-[15px] text-gray-400 mt-6" v-motion-slide-visible-once-left>
                Download the best password manager now! <br />
                So you can keep your passwords safe and secure.
            </p>
            <div class="w-[100%] flex flex-row mt-5" v-motion-slide-visible-once-left>
                <button class="download-button d-btn">
                    Download for
                    <BIconWindows class="ml-2" />
                </button>
                <button class="download-button">
                    Download for
                    <BIconApple class="ml-2" />
                </button>
            </div>
        </div>
        <div class="homepage-text mt-32 px-6 text-left" v-motion-slide-visible-once-right>
            <h1 class="text-[50px] break-words">Create An</h1>
            <h1 class="text-[50px] break-words">Account</h1>
            <h1 class="text-[50px] break-words">Today!</h1>
            <p class="text-[15px] text-gray-400 mt-6">
                ... and start using the best password manager there is. <br />
            </p>
            <div class="w-[100%] flex justify-center mt-5">
                <button class="account-button">
                    Create an account
                </button>
            </div>
        </div>
        <div class="mt-80 px-6 text-white text-sm">
            @ The Best Password Manager 2021
        </div>
    </div>
</template>

<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
</script>