<template>
  <div v-if="this.url.length == 0" class="load-holder">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <div class="button" @click="gotoProject">
      <img class="picture" :src="this.url" :alt="this.alt" />
      <div class="content ps-3">
        <h3>{{ project.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["project"],
  data() {
    return {
      alt: "",
      url: "",
    };
  },

  created() {
    this.load();
  },

  methods: {
    gotoProject() {
      this.$router.push({
        name: "Project",
        params: {
          id: this.project.id,
        },
      });
    },

    async load() {
      let paragraph_id;

      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/paragraphs`
        );

        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].project_id == this.project.id) {
            if (response.data[index].has_picture == 1) {
              paragraph_id = response.data[index].id;
              break;
            }
          }
        }
        try {
          const response = await axios.get(
            `https://bakedcheese.nl/webserver/pictures`
          );
          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].paragraph_id == paragraph_id) {
              this.alt = response.data[index].alt;
              this.url = response.data[index].url;
              break;
            }
          }
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
.button {
  border-radius: 10px;
  height: 100px;
  cursor: pointer;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  border: #f9f9f9 0px solid;
  transition: border 0.2s ease-in-out;
}
.load-holder {
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.picture {
  border-radius: 10px 0px 0px 10px;
  min-width: 100px;

  width: 20%;
  height: 100%;
  object-fit: cover;
}

.button:hover {
  border: #f9f9f9 5px solid;
}
</style>
