<template>
  <div class="list-item">
    <div v-if="this.showProjects" class="items">
      <div>
        <div class="date-item">Made on: {{ this.date }}</div>
        <div class="date-item">Updated on: {{ this.date }}</div>
      </div>

      <div class="buttons">
        <GoToButton :name="'Collection'" :params="this.data.id" />
        <EditButton :item="'collections'" :id="this.data.id" />
        <DeleteButton :item="'collections'" :id="this.data.id" />
      </div>
    </div>

    <div
      class="item"
      :class="{ 'item-active': this.showProjects }"
      @click="this.showProjects = !this.showProjects"
    >
      <div class="id-item">{{ this.index + 1 }}</div>
      <div class="content-item">
        {{ data.title }}
      </div>
      <img src="../../assets/icon/collection.svg" alt="" />
    </div>
    <div v-if="this.showProjects" class="item-in-item">
      <div class="content">
        {{ this.data.discription }}
      </div>
      <div class="margin"></div>
      <div class="item-list-heading">
        <div>Projects within:</div>
        <button @click="createProject">Create new project</button>
      </div>
      <div class="line"></div>
      <div v-for="(project, index) in this.projects" :key="project.id">
        <ProjectItem :project="project" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProjectItem from "./project-item.vue";
import DeleteButton from "./Buttons/delete-button.vue";
import GoToButton from "./Buttons/goto-button.vue";
import EditButton from "./Buttons/edit-button.vue";
export default {
  props: ["data", "index"],
  components: { ProjectItem, DeleteButton, GoToButton, EditButton },

  data() {
    return {
      projects: [],
      showProjects: false,
      date: "",
    };
  },

  mounted() {
    this.GetDate();
    this.Load();
  },

  methods: {
    createProject() {
      this.$router.push({
        name: "CreateProject",
        params: {
          collection_id: this.$props.data.id,
          collection_title: this.$props.data.title,
        },
      });
    },
    GetDate() {
      this.date = this.$props.data.made.split("T")[0];
    },
    async Load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/projects`
        );

        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].collection_id == this.$props.data.id) {
            this.projects.push(response.data[index]);
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/admin.css";
</style>
