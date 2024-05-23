import { BIconCaretRight } from 'bootstrap-icons-vue';
<template>
    <div class="flex flex-col w-screen h-[100%] bg-primary z-50 top-12 rounded-b-xl" v-motion-slide-visible-top>
        <div class="expand-text group">
            <RouterLink to="/">
                {{ $t("navbar.navexpand.home") }}
            </RouterLink>
            <div class="expand-text-icon scale-0 group-hover:scale-100 transition-all divide-purple-100">
                <BIconCaretRight class="h-5 w-5 text-white" />
            </div>
        </div>
        <div class="expand-text group">
            <RouterLink to="/login">
                {{ $t("navbar.navexpand.login") }}
            </RouterLink>
            <div class="expand-text-icon scale-0 group-hover:scale-100 transition-all divide-purple-100">
                <BIconCaretRight class="h-5 w-5 text-white" />
            </div>
        </div>
        <div class="expand-text group">
            <RouterLink to="/signup">
                {{ $t("navbar.navexpand.signup") }}
            </RouterLink>
            <div class="expand-text-icon scale-0 group-hover:scale-100 transition-all divide-purple-100">
                <BIconCaretRight class="h-5 w-5 text-white" />
            </div>
        </div>
        <div class="expand-text group">
            <RouterLink to="/mypasswords">
                {{ $t("navbar.navexpand.mypasswords") }}
            </RouterLink>
            <div class="expand-text-icon scale-0 group-hover:scale-100 transition-all divide-purple-100">
                <BIconCaretRight class="h-5 w-5 text-white" />
            </div>
        </div>
        <div class="expand-text group">
            <RouterLink to="/logout">
                {{ $t("navbar.navexpand.logout") }}
            </RouterLink>
            <div class="expand-text-icon scale-0 group-hover:scale-100 transition-all divide-purple-100">
                <BIconCaretRight class="h-5 w-5 text-white" />
            </div>
        </div>
        <div class="expand-text group">
            {{ $t("navbar.navexpand.download") }}
            <div class="expand-text-icon scale-0 group-hover:scale-100 transition-all divide-purple-100">
                <BIconCaretRight class="h-5 w-5 text-white" />
            </div>
        </div>
    </div>
</template>
