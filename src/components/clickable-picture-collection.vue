<template>
  <div v-if="!this.has_picture" class="load-holder">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="picture-content" v-else>
    <img
      class="picture"
      :src="this.url"
      :alt="this.alt"
      @click="gotoCollection"
    />
    <div class="info-picture">
      <div>
        <img src="../assets/icon/collection.svg" alt="" />{{ collection.title }}
      </div>
      <div>
        <img src="../assets/icon/arrow-repeat.svg" alt="" />{{ this.updated }}
      </div>
    </div>
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
      updated: "",
      collection: null,
      has_picture: false,
    };
  },

  created() {
    this.load();
  },

  mounted() {},

  methods: {
    GetDate() {
      if (this.collection.updated != null) {
        this.updated = this.collection.updated.split("T")[0];
      }
    },
    gotoCollection() {
      this.$router.push({
        name: "Collection",
        params: { id: this.collection_id },
      });
    },

    async load() {
      let paragraph_id;

      try {
        const responseCollection = await axios.get(
          `https://bakedcheese.nl/webserver/collections/${this.$props.collection_id}`
        );

        this.collection = responseCollection.data;
        this.GetDate();

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
.picture-content {
  position: relative;
  text-align: center;
}
.info-picture {
  position: absolute;
  top: 0px;
  left: 8px;
  z-index: 4;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.2s ease-in-out;
  opacity: 0;
}
.info-picture div {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  background-color: white;
  padding: 2px 15px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.info-picture div img {
  margin-right: 10px;
}

.info-picture div:not(:last-child) {
  margin-right: 8px;
}
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

.picture-content:hover .picture {
  border: #f9f9f9 5px solid;
}

.picture-content:hover .info-picture {
  opacity: 1;
  top: 5px;
  left: 13px;
}
</style>
