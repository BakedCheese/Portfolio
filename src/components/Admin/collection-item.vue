<template>
  <div class="list-item">
    <div v-if="this.showProjects" class="items">
      <div class="date-item-holder">
        <div class="date-item">
          <img src="../../assets/icon/collection.svg" alt="" />
        </div>
        <div class="date-item">ID: {{ this.data.id }}</div>
        <div class="date-item">Made on: {{ this.date }}</div>
        <div class="date-item">Updated on: {{ this.updated }}</div>
      </div>

      <div class="buttons">
        <GoToButton :name="'Collection'" :params="this.data.id" />
        <EditButton :routername="'CollectionEdit'" :id="this.data.id" />
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
    </div>
    <div v-if="this.showProjects" class="item-in-item">
      <div class="content">
        {{ this.data.discription }}
      </div>
      <div class="has_picture">
        <small>Has picture</small>
        <input
          type="checkbox"
          @change="changePicture"
          v-bind:checked="this.has_picture"
        />
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
      has_picture: true,
      showProjects: false,
      date: "",
      updated: "",
    };
  },

  mounted() {
    this.GetDate();
    this.Load();
  },

  methods: {
    async changePicture() {
      this.has_picture = !this.has_picture;
      await axios.put(
        `https://bakedcheese.nl/webserver/collections/${this.$props.data.id}`,
        {
          has_picture: this.has_picture,
        }
      );
    },
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
      if (this.$props.data.updated != null) {
        this.updated = this.$props.data.updated.split("T")[0];
      }
    },
    async Load() {
      try {
        this.has_picture = this.$props.data.has_picture;
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
.has_picture {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5px;
}
.has_picture small {
  margin-right: 5px;
  padding-bottom: 3px;
}
</style>
