<template>
    <div class="relative top-12 w-screen h-[100%] flex flex-col">

        <!-- Temporary -->
        <input type="text" class="mt-2" v-model="username">
        <input type="email" class="mt-2" v-model="email">
        <input type="text" class="mt-2" v-model="password">
        <button class="text-white border-2 border-white my-2" @click="createPassword">Create</button>

        <input type="text" class="mt-2" v-model="name" placeholder="cat">
        <button class="text-white border-2 border-white my-2" @click="createCategory">Create</button>
        <!-- Temporary -->

        <p class="text-white" v-for="cat in categories">{{ cat.name }}</p>

        <div class="relative h-[100%] w-screen flex flex-col">
            <article class="password-list-article bg-tertiary">
                <p>Article</p>
            </article>
            <article class="password-list-article bg-secondary text-white">
                <p>Article</p>
            </article>
            <article class="password-list-article bg-tertiary">
                <p>Article</p>
            </article>
            <article class="password-list-article bg-secondary text-white">
                <p>Article</p>
            </article>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { supabase } from '@/supabase/init';

const username = ref('');
const email = ref('');
const password = ref('');

const name = ref('');

const categories = ref([]);

const createPassword = () => {
    console.log(username.value, email.value, password.value);
}

const createCategory = async () => {
    const { data, error } = await supabase
        .from('Category')
        .insert([
            { name: name.value },
        ])
        .select()
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

watchEffect(async () => {
    const id = await getUserId()
    let { data, error } = await supabase
        .from('Category')
        .select('*')
        .eq('user_id', id)
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
    categories.value = data
});

async function getUserId() {
    const localUser = await supabase.auth.getSession()
    return (localUser.data.session.user.id)
}


</script>

<style></style>