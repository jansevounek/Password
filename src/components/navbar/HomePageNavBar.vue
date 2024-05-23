<template>
    <div class="relative z-50">
        <div class="navbar-container" :class="showAddon ? 'bg-primary text-white' : ''">
            <div class="navbar-logo-container">
                <RouterLink to="/">
                    <h1 class="main-title">PassDf</h1>
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
                    <button @click="changeLocale" class="language-button">
                        <BIconTranslate class="h-5 w-5 text-white" />
                    </button>
                </div>
                <div class="navbar-icon" @click="handleNavBarExpand">
                    <BIconList class="h-5 w-5 text-white" />
                </div>
            </div>
            <div class="navbar-text-container">
                <div class="navbar-text text-secondary">
                    <RouterLink to="/login">
                        {{ $t("navbar.nav.login") }}
                    </RouterLink>
                </div>
                <div class="navbar-text text-secondary">
                    <RouterLink to="/signup">
                        {{ $t("navbar.nav.signup") }}
                    </RouterLink>
                </div>
                <div class="navbar-text text-secondary">
                    <a href="#download">{{ $t("navbar.nav.download") }}</a>
                </div>
                <div class="navbar-text text-secondary">
                    <RouterLink to="/mypasswords">
                        {{ $t("navbar.nav.mypasswords") }}
                    </RouterLink>
                </div>
                <div class="ml-auto mr-8 h-[100%] flex flex-row items-center">
                    <img src="https://cdn3.iconfinder.com/data/icons/flag-world/512/flags-06-512.png" alt="czech-flag"
                        class="w-4 h-4 mr-2">
                    <label class="relative inline-flex cursor-pointer items-center">
                        <input id="switch" type="checkbox" @click="changeLocale" class="peer sr-only" />
                        <label for="switch" class="hidden"></label>
                        <div class="language-switch peer peer-checked:bg-secondary border-none">
                        </div>
                    </label>
                    <img src="https://cdn-icons-png.flaticon.com/512/330/330536.png" alt="uk-flag" class="w-4 h-4 ml-2">
                </div>
            </div>
        </div>
    </div>
    <NavBarExpand v-if="showAddon" class="absolute md:hidden" />
</template>

<script setup>
import NavBarExpand from './NavBarExpand.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import Tr from "@/i18n/translation"
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const i18n = useI18n()

const supportedLocales = Tr.supportedLocales

const showAddon = ref(false)

let localeIndex = ref(0)

const handleNavBarExpand = () => {
    showAddon.value = !showAddon.value
}

const changeLocale = () => {
    console.log('changing locale')
    console.log(localeIndex.value)
    localeIndex.value = (localeIndex.value + 1) % supportedLocales.length
    i18n.locale.value = supportedLocales[localeIndex.value]
}

</script>