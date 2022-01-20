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
.none-connected-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}

.none-connected-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 0px;
  font-size: 1.4rem;
  /*border: #f9f9f9 3px solid;*/
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-right: 3px;
  padding-left: 30px;
  padding-right: 30px;
  transition: background 0.1s ease-in-out;
  cursor: pointer;
}
</style>
