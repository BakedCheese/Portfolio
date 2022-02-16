<template>
  <div class="container" style="max-width: 700px">
    <div class="form">
      <h2>Edit paragraph: {{ this.heading }}</h2>
      <div class="line"></div>
      <div class="margin"></div>
      <h5>Paragraph content</h5>
      <div class="line"></div>
      <div class="margin"></div>
      <input
        type="text"
        placeholder="Heading of the paragraph"
        v-model="this.heading"
      />
      <div class="margin"></div>
      <textarea
        class="contents"
        placeholder="Content of the paragraph"
        v-model="this.content"
      />
      <div class="margin"></div>
      <div>
        <select v-model="this.selected" @change="onSelectChange">
          <option
            v-for="project in projects"
            v-bind:value="project.id"
            :key="project.id"
          >
            ID: {{ project.id }} - Title: {{ project.title }}
          </option>
          <option v-bind:value="null">NONE</option>
        </select>
        <div class="margin"></div>
        <select v-if="this.canChooseOrder" v-model="this.orderObject">
          <option v-for="para in paragraphs" v-bind:value="para" :key="para.id">
            ID: {{ para.id }} - Heading: {{ para.heading }} - Order:
            {{ para.order_in_project + 1 }}
          </option>
        </select>
      </div>

      <div class="margin"></div>
      <div>
        <button @click="Edit">Edit</button>
        <div class="margin"></div>
        <button @click="Canel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { updateOrdersPara } from "../../../scripts/updateOrder.js";
export default {
  data() {
    return {
      heading: "",
      content: "",
      paragraph: null,
      paragraphs: [],
      projects: [],
      first_selected: null,
      selected: null,
      first_orderObject: null,
      orderObject: null,
      canChooseOrder: true,
    };
  },
  beforeCreate() {
    if (!window.sessionStorage.getItem("key")) {
      this.$router.push({ name: "Login" });
    }
  },

  mounted() {
    this.Load();
  },
  methods: {
    Canel() {
      this.$router.push({ name: "Homepage" });
    },

    onSelectChange() {
      if (this.selected != this.first_selected) {
        this.canChooseOrder = false;
      } else {
        this.canChooseOrder = true;
      }
    },

    async Edit() {
      //Change order in project with other paragraph
      if (this.first_orderObject != this.orderObject) {
        try {
          //change the paragraph (order) your are editing
          await axios.put(
            `https://bakedcheese.nl/webserver/paragraphs/${this.$route.params.id}`,
            {
              content: this.content,
              heading: this.heading,
              order_in_project: this.orderObject.order_in_project,
              updated: new Date().toISOString().slice(0, 19).replace("T", " "),
            }
          );

          //change the paragraph order, with you're switching.
          await axios.put(
            `https://bakedcheese.nl/webserver/paragraphs/${this.orderObject.id}`,
            {
              order_in_project: this.first_orderObject.order_in_project,
              updated: new Date().toISOString().slice(0, 19).replace("T", " "),
            }
          );
        } catch (err) {
          console.log(err.message);
        }
      }
      //Change project_id, so the paragraph will move to another project
      else if (this.first_selected != this.selected) {
        try {
          //Get the size of the list with paragraph that are connected to that project
          let paragraphSizeFormOtherProject = 0;

          const responseParagraph = await axios.get(
            `https://bakedcheese.nl/webserver/paragraphs`
          );

          responseParagraph.data.forEach((resPara) => {
            if (resPara.project_id == this.selected) {
              paragraphSizeFormOtherProject++;
            }
          });

          let MovingParagraph = this.paragraph;

          //Change to project_id and order_in_project to be the last
          await axios.put(
            `https://bakedcheese.nl/webserver/paragraphs/${this.$route.params.id}`,
            {
              content: this.content,
              heading: this.heading,
              project_id: this.selected,
              order_in_project: paragraphSizeFormOtherProject,
              updated: new Date().toISOString().slice(0, 19).replace("T", " "),
            }
          );

          //Update all order_in_project form where the paragraph is leaving
          updateOrdersPara(MovingParagraph);
        } catch (err) {
          console.log(err.message);
        }
      } else {
        try {
          await axios.put(
            `https://bakedcheese.nl/webserver/paragraphs/${this.$route.params.id}`,
            {
              content: this.content,
              heading: this.heading,
              updated: new Date().toISOString().slice(0, 19).replace("T", " "),
            }
          );
        } catch (err) {
          console.log(err.message);
        }
      }

      this.$router.push({ name: "Homepage" });
    },

    async Load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/paragraphs/${this.$route.params.id}`
        );

        this.paragraph = response.data;
        this.heading = this.paragraph.heading;
        this.content = this.paragraph.content;
        this.first_selected = this.paragraph.project_id;
        this.orderObject = this.paragraph;
        this.first_orderObject = this.orderObject;

        const responseProject = await axios.get(
          `https://bakedcheese.nl/webserver/projects`
        );

        this.projects = responseProject.data;

        for (let index = 0; index < this.projects.length; index++) {
          if (this.projects[index].id == this.paragraph.project_id) {
            this.selected = this.projects[index].id;
            break;
          }
        }

        try {
          const responseParagraph = await axios.get(
            `https://bakedcheese.nl/webserver/paragraphs`
          );

          responseParagraph.data.forEach((resPara) => {
            if (resPara.project_id == this.paragraph.project_id) {
              this.paragraphs.push(resPara);
            }
          });
        } catch (err) {
          console.log(err.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/admin.css";
</style>
