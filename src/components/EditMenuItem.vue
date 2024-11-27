<template>
    <div class="container">
        <h1>Update Menu Item</h1>
        <menu-item-form :menu-info="menuInfo" :onsubmit="handleOnSubmit" />
    </div>
</template>

<script>
import AdminService from '@/services/AdminService';
import MenuItemService from '../services/MenuItemService'
import MenuItemForm from './forms/MenuItemForm.vue';

export default {
    name: 'EditMenuItem',
    components: {
        MenuItemForm
    },
    data() {
        return {
            menuInfo: {},
        }
    },
    methods: {
        getMenuItemById(id) {
            MenuItemService.getMenuItemById(id).then((response) => {
                console.log(response.data);
                this.menuInfo = response.data;
            });
        },
        handleOnSubmit(menuItem) {
            const id = this.$route.query.id;
            AdminService.updateMenuItem(id, menuItem).then(() => {
                this.$router.push({ name: 'MenuItems' });
            });
        }
    },
    mounted() {
        // Get the id from the query string
        const id = this.$route.query.id;
        this.getMenuItemById(id);
    }
}
</script>
