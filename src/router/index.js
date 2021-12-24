import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import WallofCollections from "../views/WallofCollections.vue";
import CreateCollection from "../views/Creation/CollectionCreation.vue";
import EditCollection from "../views/Edit/EditCollection.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/allcollections",
    name: "WallofCollections",
    component: WallofCollections,
  },
  {
    path: "/admin/overview/create/collection",
    name: "CreateCollection",
    component: CreateCollection,
  },
  {
    path: "/admin/overview/edit/collections/:id",
    name: "EditCollection",
    component: EditCollection,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
