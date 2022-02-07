<template>
  <div class="item-in-item">
    <div class="item-list-heading">
      <div>Projects</div>
    </div>
    <div class="line"></div>
    <div class="margin"></div>
    <div
      class="none-connected-list-item"
      v-for="project in this.projects"
      :key="project.id"
    >
      <div class="none-connected-item">
        {{ project.title }}
      </div>
      <div class="buttons">
        <EditButton :routername="'ProjectEdit'" :id="project.id" />
        <DeleteButton :item="'projects'" :id="project.id" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DeleteButton from "../../components/Admin/Buttons/delete-button.vue";
import EditButton from "../../components/Admin/Buttons/edit-button.vue";
export default {
  components: { DeleteButton, EditButton },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.Load();
  },
  methods: {
    async Load() {
      try {
        const responseProjects = await axios.get(
          "https://bakedcheese.nl/webserver/projects"
        );

        responseProjects.data.forEach((resProj) => {
          if (resProj.collection_id == null) {
            this.projects.push(resProj);
          }
        });
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
