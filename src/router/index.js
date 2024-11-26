import { createWebHistory, createRouter } from "vue-router";
import MenuItems from "../components/MenuItems.vue";
import ReviewOrder from "../components/ReviewOrder.vue";
import OrderManagement from "../components/OrderManagement.vue";
import AddMenuItem from "@/components/AddMenuItem.vue";
import UpdateMenuItem from "@/components/UpdateMenuItem.vue";
import DeleteMenuItem from "@/components/DeleteMenuItem.vue";

const routes = [
  {
    path: "/",
    alias: "/menuitems",
    name: "menuitems",
    component: MenuItems,
  },
  {
    path: "/orders",
    component: OrderManagement,
  },
  {
    path: "/orders/:orderId",
    component: ReviewOrder,
    props: true, // Automatically maps the route parameter to component prop.
  },

  {
    path: "/addMenuItem",
    name: "AddMenuItem",
    component: AddMenuItem,
  },
  {
    path: "/updateMenuItem",
    name: "UpdateMenuItem",
    component: UpdateMenuItem,
  },
  {
    path: "/deleteMenuItem",
    name: "DeleteMenuItem",
    component: DeleteMenuItem,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
