<template>
    <div class="container">
        <h1 class="text-center">Hello! Welcome to Brewed Awakening!</h1>
        <h2 class="text-center">Our Menu Items</h2>

        <table class="table table-striped">
            <thead>
                <th> Item ID </th>
                <th> Item Name </th>
                <th> Category </th>
                <th> Price </th>
                <th> Description </th>
            </thead>
            <tbody>
                <tr v-for="menuItem in menuItems" v-bind:key="menuItem.id">
                    <td>{{ menuItem.id }}</td>
                    <td>{{ menuItem.name }}</td>
                    <td>{{ menuItem.category }}</td>
                    <td>{{ menuItem.price }}</td>
                    <td>{{ menuItem.description }}</td>
                </tr>
            </tbody>
        </table>

        <div class="flex flex-row space-x-4">
            <div>
                <router-link to="/addMenuItem" class="btn btn-primary">Add Menu Item</router-link>
            </div>
            <div>
                <router-link to="/updateMenuItem" class="btn btn-primary">Update Menu Item</router-link>
            </div>
            <div>
                <router-link to="/deleteMenuItem" class="btn btn-primary">Delete Menu Item</router-link>
            </div>
        </div>

    </div>
</template>

<script>
import MenuItemService from '../services/MenuItemService'

    export default {
        name: 'MenuItems',
        data(){
            return {
                menuItems : []
            }
        },
        methods: {
            getAllMenuItems(){
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

<style>
.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.flex-row {
    flex-direction: row;
}

.space-x-4 > * + * {
    margin-left: 1rem;
}
</style>
