<!-- eslint-disable vue/require-v-for-key -->
<template>
    <form @submit="handleOnSubmit" class="row g-3">
        <div class="col">
            <label for="name">Name</label>
            <input type="text" v-model="menuItem.name" placeholder="Name" class="form-control">

            <label for="description">Description</label>
            <input type="text" v-model="menuItem.description" placeholder="Description" class="form-control">
        </div>
        <div class="col">
            <label for="category">Category</label>
            <input type="text" v-model="menuItem.category" placeholder="Category" class="form-control">

            <label for="price">Price</label>
            <input type="number" v-model="menuItem.price" placeholder="Price" class="form-control">
        </div>



        <h2>Customizations</h2>
        <h3 class="fs-5">Milk Type</h3>
        <div class="list-group">
            <label class="list-group-item" v-for="milkType in milkTypes">
                <input v-model="menuItem.customizations['Milk Type']" class="form-check-input me-1" type="checkbox"
                    :value="milkType.name" />
                {{ milkType.name }}
            </label>
        </div>


        <h3 class="fs-5">Toppings</h3>
        <div class="list-group">
            <label class="list-group-item" v-for="topping in toppings">
                <input type="checkbox" v-model="menuItem.customizations['Toppings']" class="form-check-input me-1"
                    :value="topping.name">
                {{ topping.name }}
            </label>
        </div>


        <h3 class="fs-5">Size</h3>
        <div class="list-group">
            <label class="list-group-item" v-for="size in sizes">
                <input type="checkbox" v-model="menuItem.customizations['Size']" class="form-check-input me-1"
                    :value="size.name">
                {{ size.name }}
            </label>
        </div>


        <h2>Nutritional Information</h2>
        <div class="list-group">
            <label class="list-group-item" v-for="nutritionalOption in nutritionalOptions">
                <input type="checkbox" v-model="menuItem.nutritionalInformation" :value="nutritionalOption.name"
                    class="form-check-input me-1">
                {{ nutritionalOption.name }}
            </label>
        </div>

        <button type="submit" class="btn btn-primary" style="margin: 1em 0;">Add Menu Item</button>
    </form>
</template>

<script>
export default {
    props: {
        onsubmit: {
            type: Function,
            required: true
        },
    },

    data() {
        return {
            sizes: [
                { name: 'Small', price: 0 },
                { name: 'Medium', price: 1 },
                { name: 'Large', price: 2 }
            ],
            toppings: [
                { name: 'Whipped Cream', price: 0 },
                { name: 'Chocolate Syrup', price: 0 },
                { name: 'Caramel Syrup', price: 0 }
            ],
            milkTypes: [
                { name: 'Whole', price: 0 },
                { name: '2%', price: 0 },
                { name: 'Almond', price: 1 }
            ],
            nutritionalOptions: [
                { name: '280 calories' },
                { name: '35g sugar' },
                { name: '12g fat' }
            ],
            menuItem: {
                "name": "",
                "description": "",
                "category": "",
                "price": 0,
                "customizations": {
                    "Milk Type": [],
                    "Toppings": [],
                    "Size": []
                },
                "nutritionalInformation": []
            }
        }
    },


    methods: {
        handleOnSubmit(e) {
            e.preventDefault();
            this.$props.onsubmit(this.menuItem);
        }
    },
}
</script>