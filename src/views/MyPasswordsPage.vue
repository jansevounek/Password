<template>
    <div class="relative top-12 w-screen h-[100%] flex flex-col">

        <!-- Temporary -->
        <input type="text" class="mt-2" v-model="p_name">
        <input type="text" class="mt-2" v-model="username">
        <input type="email" class="mt-2" v-model="email">
        <input type="text" class="mt-2" v-model="password">
        <select class="mt-2 text-secondary" name="select category" id="" v-model="category">
            <option v-for="cat in categories" :value="cat">{{ cat.name }}</option>
        </select>
        <button class="text-white border-2 border-white my-2" @click="createPassword">Create</button>

        <input type="text" class="mt-2" v-model="name" placeholder="cat">
        <button class="text-white border-2 border-white my-2" @click="createCategory">Create</button>
        <!-- Temporary -->

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
const category = ref('');
const p_name = ref('');

const name = ref('');

const categories = ref([]);

const createPassword = async () => {
    const { data, error } = await supabase
        .from('Password')
        .insert([
            {
                category_id: category.value.id,
                name: p_name.value,
                site_url: 'test://url',
                username: username.value,
                email: email.value,
                password: password.value
            },
        ])
        .select()
    if (error) {
        console.log(error)
    }
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
    }
    console.log(categories.value)
    categories.value = data


});

async function getUserId() {
    const localUser = await supabase.auth.getSession()
    return (localUser.data.session.user.id)
}


</script>

<style></style>