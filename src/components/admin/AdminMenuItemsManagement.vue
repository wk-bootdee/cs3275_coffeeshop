<template>
    <div class="container">
        <h1>
            Admin Menu Items Management
        </h1>
        <router-link :to="{ name: 'AdminAddMenuItem' }" class="btn btn-primary">Add Menu Item</router-link>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="menuItem in menuItems" :key="menuItem.id">
                        <td>{{ menuItem.id }}</td>
                        <td>{{ menuItem.name }}</td>
                        <td>{{ menuItem.price }}</td>
                        <td>
                            <router-link :to="{ name: 'AdminEditMenuItem', params: { id: menuItem.id } }"
                                class="btn btn-primary">Edit</router-link>
                            <button @click="deleteMenuItem(menuItem.id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <RouterView />

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

    </div>
</template>

<script>
import AdminService from '@/services/AdminService';
import MenuItemService from '@/services/MenuItemService';

export default {
    name: 'AdminMenuItemsManagement',
    data() {
        return {
            menuItems: []
        }
    },
    created() {
        this.getAllMenuItems();
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
    }
}
</script>