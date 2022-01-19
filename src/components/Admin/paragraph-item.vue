<template>
  <div class="list-item">
    <div v-if="this.showProjects" class="items">
      <div>
        <div class="date-item">
          <img src="../../assets/icon/justify-left.svg" alt="" />
        </div>
        <div class="date-item">Made on: {{ this.date }}</div>
        <div class="date-item">Updated on: {{ this.date }}</div>
      </div>
      <div class="buttons">
        <EditButton :routername="'ParagraphEdit'" :id="this.paragraph.id" />
        <DeleteButton :item="'paragraphs'" :id="this.paragraph.id" />
      </div>
    </div>

    <div
      class="item"
      :class="{ 'item-active': this.showProjects }"
      @click="this.showProjects = !this.showProjects"
    >
      <div class="id-item">{{ paragraph.order_in_project + 1 }}</div>
      <div class="content-item">{{ paragraph.heading }}</div>
    </div>

    <div v-if="this.showProjects" class="item-in-item">
      <div class="content">
        {{ this.paragraph.content }}
      </div>
      <div class="margin"></div>
      <div class="item-list-heading">
        <div>Pictures within:</div>
        <button @click="createPicture">Create new picture</button>
      </div>
      <div class="line"></div>
      <div v-for="(picture, index) in this.pictures" :key="picture.id">
        <PictureItem :picture="picture" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PictureItem from "./picture-item.vue";
import DeleteButton from "./Buttons/delete-button.vue";
import EditButton from "./Buttons/edit-button.vue";
export default {
  props: ["paragraph"],
  components: { PictureItem, DeleteButton, EditButton },
  data() {
    return {
      pictures: [],
      showProjects: false,
      date: "",
    };
  },
  mounted() {
    this.GetDate();
    this.Load();
  },
  methods: {
    createPicture() {
      this.$router.push({
        name: "CreatePicture",
        params: {
          paragraph_id: this.$props.paragraph.id,
          paragraph_title: this.$props.paragraph.title,
        },
      });
    },

    GetDate() {
      this.date = this.$props.paragraph.made.split("T")[0];
    },
    async Load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/pictures`
        );

        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].paragraph_id == this.$props.paragraph.id) {
            this.pictures.push(response.data[index]);
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
