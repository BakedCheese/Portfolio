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

    <div class="item-list-heading">
      <div>Paragraphs</div>
    </div>
    <div class="line"></div>
    <div class="margin"></div>
    <div
      class="none-connected-list-item"
      v-for="paragraph in this.paragraphs"
      :key="paragraph.id"
    >
      <div class="none-connected-item">
        {{ paragraph.heading }}
      </div>
      <div class="buttons">
        <EditButton :routername="'ParagraphEdit'" :id="paragraph.id" />
        <DeleteButton :item="'paragraphs'" :id="paragraph.id" />
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
      paragraphs: [],
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

        const responseParagraphs = await axios.get(
          "https://bakedcheese.nl/webserver/paragraphs"
        );

        responseParagraphs.data.forEach((resPara) => {
          if (resPara.project_id == null) {
            this.paragraphs.push(resPara);
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
