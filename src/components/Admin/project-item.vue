<template>
  <div class="list-item">
    <div v-if="this.showProjects" class="items">
      <div>
        <div class="date-item">
          <img src="../../assets/icon/file-earmark-text.svg" alt="" />
        </div>
        <div class="date-item">ID: {{ this.project.id }}</div>
        <div class="date-item">Made on: {{ this.date }}</div>
        <div class="date-item">Updated on: {{ this.date }}</div>
      </div>
      <div class="buttons">
        <GoToButton :name="'Project'" :params="this.project.id" />
        <EditButton :routername="'ProjectEdit'" :id="this.project.id" />
        <DeleteButton :item="'projects'" :id="this.project.id" />
      </div>
    </div>

    <div
      class="item"
      :class="{ 'item-active': this.showProjects }"
      @click="this.showProjects = !this.showProjects"
    >
      <div class="id-item">{{ index + 1 }}</div>
      <div class="content-item">{{ project.title }}</div>
    </div>

    <div v-if="this.showProjects" class="item-in-item">
      <div class="content">
        {{ this.project.discription }}
      </div>
      <div class="margin"></div>

      <div class="item-list-heading">
        <div>Paragraphs within:</div>
        <button @click="createParagraph">Create new paragraph</button>
      </div>
      <div class="line"></div>
      <div v-for="paragraph in this.paragraphs" :key="paragraph.id">
        <ParagraphItem :paragraph="paragraph" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ParagraphItem from "./paragraph-item.vue";
import DeleteButton from "./Buttons/delete-button.vue";
import GoToButton from "./Buttons/goto-button.vue";
import EditButton from "./Buttons/edit-button.vue";
export default {
  props: ["project", "index"],
  data() {
    return {
      paragraphs: [],
      showProjects: false,
      date: "",
    };
  },
  components: { ParagraphItem, DeleteButton, GoToButton, EditButton },
  mounted() {
    this.GetDate();
    this.Load();
  },
  methods: {
    createParagraph() {
      this.$router.push({
        name: "CreateParagraph",
        params: {
          project_id: this.$props.project.id,
          project_title: this.$props.project.title,
          paragraphssize: this.paragraphs.length,
        },
      });
    },
    GetDate() {
      this.date = this.$props.project.made.split("T")[0];
    },
    async Load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/paragraphs`
        );

        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].project_id == this.$props.project.id) {
            this.paragraphs.push(response.data[index]);
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style></style>
