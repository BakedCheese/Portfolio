<template>
  <div v-if="!this.has_picture" class="load-holder">
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
      has_picture: false,
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
      let paragraph_id;

      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/projects`
        );

        //project
        for (let j = 0; j < response.data.length; j++) {
          if (response.data[j].collection_id == this.$props.collection_id) {
            const responsePar = await axios.get(
              `https://bakedcheese.nl/webserver/paragraphs`
            );
            //paragraph
            for (let index = 0; index < responsePar.data.length; index++) {
              if (responsePar.data[index].project_id == response.data[j].id) {
                if (responsePar.data[index].has_picture == 1) {
                  paragraph_id = responsePar.data[index].id;
                  break;
                }
              }
            }
            //picture
            if (paragraph_id != null) {
              const responsePic = await axios.get(
                `https://bakedcheese.nl/webserver/pictures`
              );

              for (let index = 0; index < responsePic.data.length; index++) {
                if (responsePic.data[index].paragraph_id == paragraph_id) {
                  this.alt = responsePic.data[index].alt;
                  this.url = responsePic.data[index].url;

                  this.has_picture = true;
                  return;
                }
              }
            }
          }
        }
      } catch (err) {
        console.log(err.message);
      }

      if (!this.has_picture) {
        try {
          await axios.put(
            `https://bakedcheese.nl/webserver/collections/${this.$props.collection_id}`,
            {
              has_picture: false,
            }
          );
        } catch (err) {
          console.log(err.message);
        }
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
  border-radius: 10px;
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
