import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AllCollections from "../views/AllCollections.vue";
import CreateCollection from "../views/Admin/Creation/CollectionCreation.vue";
import CreateProject from "../views/Admin/Creation/ProjectCreation.vue";
import CreateParagraph from "../views/Admin/Creation/ParagraphCreation.vue";
import CreatePicture from "../views/Admin/Creation/PictureCreation.vue";
import EditCollection from "../views/Edit/EditCollection.vue";
import Collection from "../views/Collection.vue";
import Project from "../views/Project.vue";
import Login from "../views/Admin/Login.vue";
import Homepage from "../views/Admin/Homepage.vue";

const routes = [
  //base
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  //admin
  {
    path: "/admin",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/homepage",
    name: "Homepage",
    component: Homepage,
  },

  //admin-creation
  {
    path: "/admin/homepage/create/collection",
    name: "CreateCollection",
    component: CreateCollection,
  },
  {
    path: "/admin/homepage/create/project",
    name: "CreateProject",
    component: CreateProject,
    props: true,
  },
  {
    path: "/admin/homepage/create/paragraph",
    name: "CreateParagraph",
    component: CreateParagraph,
    props: true,
  },
  {
    path: "/admin/homepage/create/picture",
    name: "CreatePicture",
    component: CreatePicture,
    props: true,
  },
  //admin-edit
  {
    path: "/admin/homepage/edit/collections/:id",
    name: "EditCollection",
    component: EditCollection,
    props: true,
  },
  //default
  {
    path: "/allcollections",
    name: "AllCollections",
    component: AllCollections,
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
