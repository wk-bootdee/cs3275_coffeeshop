<!-- eslint-disable vue/require-v-for-key -->
<template>

    <div class="container">
        <h1>Add Menu Item</h1>
        <menu-item-form :onsubmit="addMenuItem" />
    </div>

</template>

<script>
import AdminService from '@/services/AdminService';
import MenuItemForm from './forms/MenuItemForm.vue';

export default {
    name: 'AddMenuItem',
    components: {
        MenuItemForm
    },

    methods: {
        addMenuItem(payload) {
            AdminService.addMenuItem(payload).then((response) => {
                console.log(response);
                this.$router.push({ name: 'MenuItems' });
            });
        }
    }
}
</script>