<template>
  <div v-if="!this.url" class="load-holder">
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
        <img src="../assets/icon/collection.svg" alt="" />{{
          this.collection.title
        }}
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
      try {
        const responseCollection = await axios.get(
          `https://bakedcheese.nl/webserver/collections/${this.$props.collection_id}`
        );

        this.collection = responseCollection.data;
        this.GetDate();

        //getting all the projects
        const responseProjects = await axios.get(
          `https://bakedcheese.nl/webserver/projects`
        );

        //going through all the projects
        for (let j = 0; j < responseProjects.data.length; j++) {
          //checking in the project list if there is a project with the same id
          if (
            responseProjects.data[j].collection_id == this.$props.collection_id
          ) {
            //getting all the paragraphs
            const responseParagraphs = await axios.get(
              `https://bakedcheese.nl/webserver/paragraphs`
            );
            //going through all the paragraphs
            for (let i = 0; i < responseParagraphs.data.length; i++) {
              //checking in the paragraphs list if there is a paragraph with the same id
              if (
                responseParagraphs.data[i].project_id ==
                responseProjects.data[j].id
              ) {
                //getting all the pictures
                const responsePictures = await axios.get(
                  `https://bakedcheese.nl/webserver/pictures`
                );
                //going through all the pictures
                for (let x = 0; x < responsePictures.data.length; x++) {
                  //checking in the pictures list if there is a pictures with the same id
                  if (
                    responsePictures.data[x].paragraph_id ==
                    responseParagraphs.data[i].id
                  ) {
                    //Getting the alt and utl from picture
                    this.alt = responsePictures.data[x].alt;
                    this.url = responsePictures.data[x].url;
                    //Return out of the for-loop
                    return;
                  }
                }
              }
            }
            //picture
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
  height: 400px;
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
