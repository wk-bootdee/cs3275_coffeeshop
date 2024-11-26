<template>
    <div class="container">
        <h1 class="text-center">Hello! Welcome to Brewed Awakening!</h1>
        <h2 class="text-center">Our Menu Items</h2>

        <div class="my-4">
            <router-link to="/addMenuItem" class="btn btn-primary">Add Menu Item</router-link>
        </div>
        <table class="table table-striped">
            <thead class="text-center">
                <th> Item ID </th>
                <th> Item Name </th>
                <th> Category </th>
                <th> Price </th>
                <th> Description </th>
                <th> Action </th>
            </thead>
            <tbody>
                <tr v-for="menuItem in menuItems" v-bind:key="menuItem.id">
                    <td>{{ menuItem.id }}</td>
                    <td>{{ menuItem.name }}</td>
                    <td>{{ menuItem.category }}</td>
                    <td>{{ menuItem.price }}</td>
                    <td>{{ menuItem.description }}</td>
                    <td class="col space-x-4">
                        <router-link :to="{ name: 'EditMenuItem', query: { id: menuItem.id } }"
                            class="btn btn-primary">Edit</router-link>
                        <button @click="handleOnClickDelete" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>




    </div>
</template>

<script>
import MenuItemService from '../services/MenuItemService'

export default {
    name: 'MenuItems',
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
        },
        handleOnClickDelete() {
            console.log('Delete button clicked');
        }
    },
    mounted() {
        this.getAllMenuItems();
    }
}
</script>

<style scoped>
.space-x-4>*+* {
    margin-left: 1rem;
}

.text-center {
    text-align: center;
}
</style>