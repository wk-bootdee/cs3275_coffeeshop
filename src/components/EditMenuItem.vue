<template>
    <div class="container">
        <h1>Update Menu Item</h1>
        <menu-item-form />
    </div>
</template>

<script>
import MenuItemService from '../services/MenuItemService'
import MenuItemForm from './forms/MenuItemForm.vue';

export default {
    name: 'EditMenuItem',
    components: {
        MenuItemForm
    },
    data() {
        return {
            menuItems: []
        }
    },
    methods: {
        getAllMenuItems() {
            MenuItemService.getAllMenuItems().then((response) => {
                this.menuItems = response.data;
            });
        }
    },
    mounted() {
        this.getAllMenuItems();
    }
}
</script>
