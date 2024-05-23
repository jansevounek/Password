<template>
    <div class="h-screen w-screen flex justify-center z-0">
        <div class="login-container">
            <h1 class="text-[50px] h-28 main-title">
                <VueTypewriterEffect :strings="['Log into your account!', 'Log in!']" />
            </h1>
            <LoginSignupSocials />
            <form action="">
                <input type="text" class="log-in-form w-[100%] text-white" placeholder="Email"
                    v-motion-slide-visible-once-left v-model="email"
                    :class="isEmailValid === false ? 'wrong-email' : 'text-green-600'">
                <div class="flex flex-row">
                    <input :type="showPassword === true ? 'text' : 'password'" class="log-in-form w-[80%]"
                        placeholder="Password" v-motion-slide-visible-once-right v-model="password">
                    <div class="show-password-button" @click="showPassword = !showPassword">
                        <BIconEye v-if="!showPassword" />
                        <BIconEyeSlash v-if="showPassword" />
                    </div>
                </div>
            </form>
            <div class="relative w-[100%] flex flex-col justify-center mt-10">
                <button class="download-button h-10" v-motion-slide-visible-once-left>{{
                    $t("login.button1") }}</button>
                <RouterLink to="/signup">
                    <button class="download-button h-10 w-48 mt-4 text-nowrap" v-motion-slide-visible-once-right>
                        {{$t("login.button2")}}
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
import { ref, computed } from 'vue'
import LoginSignupSocials from '../components/login-signup/LoginSignupSocials.vue'

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