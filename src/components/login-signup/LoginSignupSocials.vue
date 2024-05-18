<template>
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
</template>