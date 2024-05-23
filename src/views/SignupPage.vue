<template>
    <div class="h-screen w-screen flex justify-center">
        <div class="signup-container">
            <h1 class="text-[50px] h-28 main-title">
                <VueTypewriterEffect :strings="['Create a new account!', 'Sign up!']" />
            </h1>
            <div class="relative w-[100%] flex flex-row items-center mt-10 justify-center h-12 text-white">
                <div class="login-form-icon" v-motion-slide-visible-once-left>
                    <BIconGoogle class="h-4 w-4" />
                </div>
                <div class="login-form-icon" v-motion-slide-visible-once-bottom>
                    <BIconGithub class="h-4 w-4" />
                </div>
                <div class="login-form-icon" v-motion-slide-visible-once-right>
                    <BIconFacebook class="h-4 w-4" />
                </div>
            </div>
            <form action="">
                <input type="text" class="log-in-form" placeholder="Email" v-motion-slide-visible-once-left
                    v-model="email" :class="isEmailValid === false ? 'wrong-email' : ''">
                <input :type="showPassword === true ? 'text' : 'password'" class="log-in-form" placeholder="Password"
                    v-motion-slide-visible-once-right v-model="password">
                <div class="flex flex-row">
                    <input :type="showPassword === true ? 'text' : 'password'" class="log-in-form w-[80%]"
                        placeholder="Repeat the password" v-motion-slide-visible-once-right v-model="repeat_password">
                    <div class="show-password-button" @click="showPassword = !showPassword">
                        <BIconEye v-if="!showPassword" />
                        <BIconEyeSlash v-if="showPassword" />
                    </div>
                </div>
            </form>
            <div class="flex relative flex-row mb-2 h-10 w-[100%] justify-end items-center">
                <span class="password-strength-box" :class="strengthLevel > 1 ? 'password-strength-1' : ''">
                </span>
                <span class="password-strength-box" :class="strengthLevel > 2 ? 'password-strength-2' : ''">
                </span>
                <span class="password-strength-box" :class="strengthLevel > 3 ? 'password-strength-3' : ''">
                </span>
                <span class="password-strength-box" :class="strengthLevel > 4 ? 'password-strength-4' : ''">
                </span>
            </div>
            <div class="relative w-[100%] flex justify-center mt-8">
                <button class="download-button w-40 h-10" v-motion-slide-visible-once-left>
                    {{ $t("signup.button1") }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
import { ref, computed } from 'vue'
import { parse } from "vue/compiler-sfc";

const showPassword = ref(false)

const password = ref('')

const email = ref('')

const isEmailValid = computed(() => {
    if (email.value === '') {
        return true
    }
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)
})

const passwordStrength = computed(() => {
    let score = 0

    let letters = {}
    for (let i = 0; i < password.value.length; i++) {
        letters[password.value[i]] = (letters[password.value[i]] || 0) + 1
        score += 5.0 / letters[password.value[i]]
    }

    let variations = {
        digits: /\d/.test(password.value),
        lower: /[a-z]/.test(password.value),
        upper: /[A-Z]/.test(password.value),
        nonWords: /\W/.test(password.value),
    };

    let variationCount = 0;
    for (let check in variations) {
        variationCount += (variations[check] === true) ? 1 : 0;
    }

    score += ((variationCount - 1) * 10);

    return parseInt(score)
})

const strengthLevel = computed(() => {
    if (passwordStrength.value < 20) {
        return 1
    } else if (passwordStrength.value < 40) {
        return 2
    } else if (passwordStrength.value < 60) {
        return 3
    } else if (passwordStrength.value < 75) {
        return 4
    } else {
        return 5
    }
})
</script>