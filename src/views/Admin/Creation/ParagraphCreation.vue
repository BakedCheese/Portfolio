<template>
  <div class="container" style="max-width: 1100px">
    <div class="form">
      <h2>Create new paragraph in project: {{ this.create_in_title }}</h2>
      <div class="line"></div>
      <div class="margin"></div>
      <h5>Paragraph content</h5>
      <div class="line"></div>
      <div class="margin"></div>
      <div class="links">
        <input type="checkbox" @change="this.links = !this.links" />
        <small>Links</small>
      </div>

      <div class="margin"></div>
      <input
        v-if="!this.links"
        type="text"
        placeholder="Heading of paragraph"
        v-model="this.heading"
      />
      <input
        v-else
        type="text"
        placeholder="Heading of URL"
        v-model="this.heading"
      />
      <div class="margin"></div>
      <textarea
        v-if="!this.links"
        class="contents"
        placeholder="Content of the paragraph"
        v-model="this.content"
      />
      <input v-else type="text" placeholder="URL" v-model="this.content" />
      <div class="margin"></div>
      <div>
        <button @click="Create">Add</button>
        <div class="margin"></div>
        <button @click="Canel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["project_id", "project_title", "paragraphssize"],
  data() {
    return {
      heading: "",
      content: "",
      create_in_title: this.$props.project_title,
      links: false,
    };
  },
  beforeCreate() {
    if (!window.sessionStorage.getItem("key")) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    Canel() {
      this.$router.push({ name: "Homepage" });
    },

    async Create() {
      try {
        await axios.post(`https://bakedcheese.nl/webserver/paragraphs`, {
          order_in_project: this.$props.paragraphssize,
          heading: this.heading,
          content: this.content,
          project_id: this.$props.project_id,
          links: this.links,
        });

        this.$router.push({ name: "Homepage" });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/admin.css";
.links {
  display: inline-block;
}
.links input {
  width: 20px;
}
</style>
