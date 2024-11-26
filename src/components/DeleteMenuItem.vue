<template>

    <div class="container">
        <h1>Delete Menu Item</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Menu Item ID</th>
                    <th>Menu Item Name</th>
                    <th>Menu Item Description</th>
                    <th>Menu Item Price</th>
                    <th>Menu Item Type</th>
                    <th>Menu Item Category</th>
                    <th>Menu Item Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="menuItem in menuItems" :key="menuItem.menuItemId">
                    <td>{{menuItem.menuItemId}}</td>
                    <td>{{menuItem.menuItemName}}</td>
                    <td>{{menuItem.menuItemDescription}}</td>
                    <td>{{menuItem.menuItemPrice}}</td>
                    <td>{{menuItem.menuItemType}}</td>
                    <td>{{menuItem.menuItemCategory}}</td>
                    <td>{{menuItem.menuItemImage}}</td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                    </td>
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
</script>

<style>
</style>