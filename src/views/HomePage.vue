
import { BIconWindow } from 'bootstrap-icons-vue';

import { BIcon0Circle } from 'bootstrap-icons-vue';
<template>
    <HomePageNavBar />
    <div>
        <div class="h-[100vh] relative">
            <div class="homepage-text" id="left-side" ref="left">
                <h1 class="title text-font">We go
                    <span class="special-left">fastest</span>
                </h1>
            </div>
            <div class="homepage-text" id="right-side">
                <h1 class="title text-font">We go
                    <span class="special-right">spyless</span>
                </h1>
            </div>
        </div>
        <div class="h-20 relative">
            <div class="slider-end" id="slider-left-end" ref="leftEnd">
            </div>
            <div class="slider-end" id="slider-right-end" ref="rightEnd">
            </div>
        </div>

        <!-- Carousel from https://tailwindcomponents.com/component/page-scroll-sticky -->
        <Carousel />
    </div>
</template>

<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
import { ref } from "vue";
import HomePageNavBar from "../components/navbar/HomePageNavBar.vue";
import { BIconAndroid, BIconFacebook } from "bootstrap-icons-vue";
import Carousel from "../components/homepage/Carousel.vue";

const left = ref('left')
const leftEnd = ref('heading-end')
const rightEnd = ref('heading-end')

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.value.style.width = `${p}%`
    leftEnd.value.style.width = `${p}%`
    rightEnd.value.style.width = `${100 - p}%`
    rightEnd.value.style.left = `${p}%`
}

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e.touches[0]);
</script>