<template>
  <div v-if="this.url.length == 0" class="load-holder">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <img
      class="picture"
      :src="this.url"
      :alt="this.alt"
      @click="gotoCollection"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["collection_id"],
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
    gotoCollection() {
      this.$router.push({
        name: "Collection",
        params: { id: this.collection_id },
      });
    },

    async load() {
      let project_id;
      let paragraph_id;

      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/projects`
        );

        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].collection_id == this.$props.collection_id) {
            project_id = response.data[index].id;
            break;
          }
        }

        if (project_id == null) {
          return;
        }

        try {
          const response = await axios.get(
            `https://bakedcheese.nl/webserver/paragraphs`
          );

          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].project_id == project_id) {
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
                console.log(response.data[index]);

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
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
.load-holder {
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.picture {
  border-radius: 50px;
  width: 100%;
  height: 280px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: #f9f9f9 0px solid;
}

.picture:hover {
  border: #f9f9f9 5px solid;
}
</style>
