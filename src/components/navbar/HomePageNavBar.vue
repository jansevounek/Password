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
                    <select v-model="locale" class="language-dropdown">
                        <option class="language-dropdown-item" v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale">
                            {{ sLocale }}
                        </option>
                    </select>
                </div>
                <div class="navbar-icon" @click="handleNavBarExpand">
                    <BIconList class="h-5 w-5 text-white" />
                </div>
            </div>
            <div class="navbar-text-container">
                <div class="navbar-text text-secondary">
                    <RouterLink to="/login">
                        {{ $t("nav.login") }}
                    </RouterLink>
                </div>
                <div class="navbar-text text-secondary">
                    <RouterLink to="/signup">
                        {{ $t("nav.signup") }}
                    </RouterLink>
                </div>
                <div class="navbar-text text-secondary">
                    <a href="#download">{{ $t("nav.download") }}</a>
                </div>
                <div class="navbar-text text-secondary">
                    <RouterLink to="/mypasswords">
                        {{ $t("nav.mypasswords") }}
                    </RouterLink>
                </div>
                <div class="navbar-icon">
                    <select v-model="locale" class="language-dropdown">
                        <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale">
                            {{ sLocale }}
                        </option>
                    </select>
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

const supportedLocales = Tr.supportedLocales

const showAddon = ref(false)

const handleNavBarExpand = () => {
    showAddon.value = !showAddon.value
}

</script>