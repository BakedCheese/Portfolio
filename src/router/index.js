import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AllCollections from "../views/AllCollections.vue";
import CreateCollection from "../views/Creation/CollectionCreation.vue";
import EditCollection from "../views/Edit/EditCollection.vue";
import Collection from "../views/Collection.vue";
import Project from "../views/Project.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
