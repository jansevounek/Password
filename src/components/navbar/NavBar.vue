
import { BIconBoxArrowRight } from 'bootstrap-icons-vue';

import { BIconPlusSquare } from 'bootstrap-icons-vue';

import { BIconBoxes } from 'bootstrap-icons-vue';

import { BIconBoxArrowInRight } from 'bootstrap-icons-vue';

import { BIconBoxArrowRight } from 'bootstrap-icons-vue';

import { BIconHouse } from 'bootstrap-icons-vue';

import { BIconSearch } from 'bootstrap-icons-vue';

import { BIcon0Circle } from 'bootstrap-icons-vue';
<template>
    <div class="bg-primary h-12 w-screen flex flex-row fixed">
        <div class="navbar-logo-container">
            <RouterLink to="/">
                <h1 class="main-title text-white">PassDf</h1>
            </RouterLink>
        </div>
        <div class="navbar-icon-container">
            <div class="navbar-icon">
                <RouterLink to="/login">
                    <BIconBoxArrowInRight class="h-5 w-5 text-white" />
                </RouterLink>
            </div>
            <div class="navbar-icon">
                <RouterLink to="/signup">
                    <BIconPlusSquare class="h-5 w-5 text-white" />
                </RouterLink>
            </div>
            <div class="navbar-icon">
                <BIconTranslate class="h-5 w-5 text-white" />
            </div>
            <div class="navbar-icon" @click="handleNavBarExpand">
                <BIconList class="h-5 w-5 text-white" />
            </div>
        </div>
        <div class="navbar-text-container">
            <div class="navbar-text">
                <RouterLink to="/">
                    {{ $t("nav.home") }}
                </RouterLink>
            </div>
            <div class="navbar-text">
                <RouterLink to="/signup">
                    {{ $t("nav.signup") }}
                </RouterLink>
            </div>
            <div class="navbar-text">
                <RouterLink to="/login">
                    {{ $t("nav.login") }}
                </RouterLink>
            </div>
        </div>
    </div>
    <NavBarExpand v-if="showAddon" class="absolute md:hidden" />
</template>

<script setup>
import NavBarExpand from './NavBarExpand.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const showAddon = ref(false)

const handleNavBarExpand = () => {
    showAddon.value = !showAddon.value
}
</script>

<style>
</style>