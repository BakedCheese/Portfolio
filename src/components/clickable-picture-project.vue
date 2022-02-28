<template>
  <div v-if="this.url.length > 0">
    <div class="button" @click="gotoProject">
      <img class="picture" :src="this.url" :alt="this.alt" />
      <div class="content ps-3">
        <h3>{{ project.title }}</h3>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="button" @click="gotoProject">
      <div class="content ps-5">
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
      try {
        const responseParagraphs = await axios.get(
          `https://bakedcheese.nl/webserver/paragraphs`
        );

        for (let j = 0; j < responseParagraphs.data.length; j++) {
          if (responseParagraphs.data[j].project_id == this.project.id) {
            const responsePictures = await axios.get(
              `https://bakedcheese.nl/webserver/pictures`
            );
            for (let i = 0; i < responsePictures.data.length; i++) {
              if (
                responsePictures.data[i].paragraph_id ==
                responseParagraphs.data[j].id
              ) {
                this.alt = responsePictures.data[i].alt;
                this.url = responsePictures.data[i].url;
                return;
              }
            }
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
