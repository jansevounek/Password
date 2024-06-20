<template>
    <div class="relative top-12 h-screen w-screen">
        <MobileMailBox class="flex lg:hidden" />
        <PcMailBox class="hidden lg:inline" />
        <div class="h-[1000px]">Hello</div>
    </div>
</template>

<script setup>
import MobileMailBox from "../components/mymailbox/MobileMailBox.vue";
import PcMailBox from "../components/mymailbox/PcMailBox.vue";
</script>
