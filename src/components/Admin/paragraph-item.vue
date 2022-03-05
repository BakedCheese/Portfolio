<template>
  <div class="list-item">
    <div v-if="this.showProjects" class="items">
      <div class="date-item-holder">
        <div class="date-item">
          <img
            v-if="!this.paragraph.links"
            src="../../assets/icon/justify-left.svg"
            alt=""
          />
          <img v-else src="../../assets/icon/link-45deg.svg" alt="Links" />
        </div>
        <div class="date-item">ID: {{ this.paragraph.id }}</div>
        <div class="date-item">Made on: {{ this.date }}</div>
        <div class="date-item">Updated on: {{ this.updated }}</div>
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
      <div class="id-item">
        {{ paragraph.order_in_project + 1 }}
      </div>

      <div v-if="paragraph.heading" class="content-item">
        {{ paragraph.heading }}
      </div>
      <div v-else class="content-item">
        <i><small>Placeholder</small> </i>
      </div>
      <img
        v-if="this.paragraph.links && !this.showProjects"
        src="../../assets/icon/link-45deg.svg"
        alt="Links"
      />
    </div>

    <div v-if="this.showProjects" class="item-in-item">
      <div v-if="!this.paragraph.links" class="content">
        {{ this.paragraph.content }}
      </div>
      <div v-else class="content">
        <a :href="this.paragraph.content" target="_blank">{{
          this.paragraph.content
        }}</a>
      </div>
      <div class="picture_cluster">
        <small>Has picture cluster</small>
        <input
          type="checkbox"
          @change="changePicture"
          v-bind:checked="this.picture_cluster"
        />
      </div>
      <div v-if="!this.paragraph.links">
        <div class="margin"></div>
        <div class="item-list-heading">
          <div>Pictures within:</div>
          <button @click="createPicture">Create new picture</button>
        </div>
        <div class="line"></div>
        <div v-for="picture in this.pictures" :key="picture.id">
          <PictureItem :picture="picture" />
        </div>
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
      picture_cluster: true,
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
      this.picture_cluster = !this.picture_cluster;
      await axios.put(
        `https://bakedcheese.nl/webserver/paragraphs/${this.$props.paragraph.id}`,
        {
          picture_cluster: this.picture_cluster,
        }
      );
    },
    createPicture() {
      this.$router.push({
        name: "CreatePicture",
        params: {
          paragraph_id: this.$props.paragraph.id,
          paragraph_title: this.$props.paragraph.heading,
        },
      });
    },

    GetDate() {
      this.date = this.$props.paragraph.made.split("T")[0];
      if (this.$props.paragraph.updated != null) {
        this.updated = this.$props.paragraph.updated.split("T")[0];
      }
    },
    async Load() {
      try {
        this.picture_cluster = this.$props.paragraph.picture_cluster;
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

<style scoped>
.picture_cluster {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5px;
}
.picture_cluster small {
  margin-right: 5px;
  padding-bottom: 3px;
}
</style>
