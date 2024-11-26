<template>

    <div class="container">
        <h1>Add Menu Item</h1>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="menuItem.name">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" v-model="menuItem.description">
            </div>
        </form>
    </div>

</template>

<script>

import MenuItemService from '../services/MenuItemService'

export default {
    name: 'AddMenuItem',
    data() {
        return {
            menuItem: {
                name: '',
                description: ''
            }
        }
    },
    methods: {
        addMenuItem() {
            MenuItemService.addMenuItem(this.menuItem).then(() => {
                this.$router.push({ name: 'menuItems' });
            });
        }
    }
}
</script>