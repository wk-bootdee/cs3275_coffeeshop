<!-- eslint-disable vue/require-v-for-key -->
<template>

    <div class="container">
        <h1>Add Menu Item</h1>
        <menu-item-form :onsubmit="addMenuItem" />
    </div>

</template>

<script>

// import MenuItemService from '../services/MenuItemService'
import MenuItemForm from './forms/MenuItemForm.vue';

export default {
    name: 'AddMenuItem',
    components: {
        MenuItemForm
    },

    methods: {
        addMenuItem(payload) {
            console.log(payload);
            // MenuItemService.addMenuItem(this.menuItem).then(() => {
            //     this.$router.push({ name: 'menuItems' });
            // });
        }
    }
}
</script>