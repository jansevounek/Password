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
                <div class="navbar-icon" @click="handleNavBarExpand">
                    <BIconList class="h-5 w-5 text-white" />
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

const showAddon = ref(false)

//const navLeft = ref(null)

const handleNavBarExpand = () => {
    showAddon.value = !showAddon.value
}
</script>