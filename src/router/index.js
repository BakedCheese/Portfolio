import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AllCollections from "../views/AllCollections.vue";
import CreateCollection from "../views/Creation/CollectionCreation.vue";
import EditCollection from "../views/Edit/EditCollection.vue";
import Collection from "../views/Collection.vue";
import Project from "../views/Project.vue";
import Login from "../views/Admin/Login.vue";
import Homepage from "../views/Admin/Homepage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/allcollections",
    name: "AllCollections",
    component: AllCollections,
  },
  {
    path: "/admin/overview/create/collection",
    name: "CreateCollection",
    component: CreateCollection,
  },
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/overview/edit/collections/:id",
    name: "EditCollection",
    component: EditCollection,
    props: true,
  },
  {
    path: "/collections/:id",
    name: "Collection",
    component: Collection,
    props: true,
  },
  {
    path: "/projects/:id",
    name: "Project",
    component: Project,
    props: true,
  },
  {
    path: "/admin/homepage",
    name: "Homepage",
    component: Homepage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
