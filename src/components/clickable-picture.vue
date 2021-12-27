<template>
  <div v-if="this.url.length == 0" class="load-holder">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <img class="picture" :src="this.url" :alt="this.alt" />
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
    async load() {
      let project_id;
      let paragraph_id;

      try {
        const response = await axios.get(
          `https://portfolio-eck7c.ondigitalocean.app/webserver/projects`
        );

        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].collection_id == this.$props.collection_id) {
            project_id = response.data[index].id;
            console.log(response.data[index].title);
          }
        }

        try {
          const response = await axios.get(
            `https://portfolio-eck7c.ondigitalocean.app/webserver/paragraphs`
          );

          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].project_id == project_id) {
              if (response.data[index].order_in_project == 0) {
                paragraph_id = response.data[index].id;
                console.log(response.data[index].heading);
              }
            }
          }
          try {
            const response = await axios.get(
              `https://portfolio-eck7c.ondigitalocean.app/webserver/pictures`
            );
            for (let index = 0; index < response.data.length; index++) {
              if (response.data[index].paragraph_id == paragraph_id) {
                this.alt = response.data[index].alt;
                console.log(this.alt);
                this.url = response.data[index].url;
                console.log(this.url);
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
