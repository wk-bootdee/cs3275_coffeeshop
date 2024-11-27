<template>
    <div class="container" style="position: relative;">
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
                        <button @click="handleOnClickShowDialog(menuItem.id)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
    <!-- Modal -->
    <dialog id="modal">
        <div class=" modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="display: flex;justify-content: space-between;">
                    <h5 class="modal-title">Delete?</h5>
                    <button type="button" class="btn-close" onclick="modal.close()"></button>
                </div>
                <div class="modal-body">
                    <p>It cannot be undone. Do you want to proceed?</p>
                </div>
                <div class="modal-footer col space-x-4">
                    <button type="button" class="btn btn-outline-secondary" onclick="modal.close()">Close</button>
                    <button type="button" class="btn btn-danger" @click="handleOnClickDelete()">Delete</button>
                </div>
            </div>
        </div>
    </dialog>

</template>

<script>
import AdminService from '@/services/AdminService';
import MenuItemService from '../services/MenuItemService'

export default {
    name: 'MenuItems',
    data() {
        return {
            menuItems: [],
            selectedId: null,
            dialog: null
        }
    },
    methods: {
        getAllMenuItems() {
            MenuItemService.getAllMenuItems().then((response) => {
                this.menuItems = response.data;
            });
        },

        handleOnClickDelete() {
            if (this.selectedId) {
                AdminService.deleteMenuItem(this.selectedId).then(() => {
                    this.getAllMenuItems();
                    this.selectedId = null;
                    this.dialog.close();
                    this.menuItems = this.menuItems.filter((menuItem) => menuItem.id !== this.selectedId);
                });
            }
        },

        handleOnClickShowDialog(id) {
            this.selectedId = id;
            this.dialog.showModal();
        }

    },
    mounted() {
        this.getAllMenuItems();
        this.dialog = document.getElementById('modal');
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

dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>