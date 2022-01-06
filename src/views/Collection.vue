<template>
  <div class="container" style="max-width: 900px">
    <div class="block">
      <div class="inner-block">
        <div class="bblock">
          <h2 class="w-text fw-bolder spacing">Collection: {{ this.title }}</h2>
        </div>
        <div class="wblock">
          <p class="g-text">{{ this.discription }}</p>
        </div>
        <div class="margin"></div>
        <div class="margin head">
          <div class="w-text fw-bold spacing">Projects within</div>
        </div>
        <div v-if="this.projects.length > 0">
          <div v-for="project in projects" :key="project.id">
            <ClickablePictureProject :project="project" />
            <div class="margin"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClickablePictureProject from "../components/clickable-picture-project.vue";
export default {
  components: { ClickablePictureProject },
  created() {
    document.title = "...";
    this.load();
  },
  data() {
    return {
      title: "",
      discription: "",
      projects: [],
    };
  },
  methods: {
    async load() {
      try {
        const response = await axios.get(
          `https://portfolio-app-6qg7c.ondigitalocean.app/webserver/collections/${this.$route.params.id}`
        );
        this.title = response.data.title;
        this.discription = response.data.discription;
        document.title = "C:" + this.title;

        try {
          const response = await axios.get(
            `https://portfolio-app-6qg7c.ondigitalocean.app/webserver/projects`
          );
          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].collection_id == this.$route.params.id) {
              this.projects.push(response.data[index]);
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
.block {
  display: flex;
  justify-content: center;
}
.inner-block {
  width: 100%;
  max-width: 450px;
}
.bblock {
  color: #f9f9f9;
  background-color: #1e1e1e;
  border-radius: 50px;
  letter-spacing: 5px;
  padding-left: 10px;
  padding-right: 10px;
  height: 183px;
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  padding-bottom: 20px;
}

.wblock {
  color: rgba(30, 30, 30, 0.8);
  background-color: #f9f9f9;
  border-radius: 50px;

  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  margin-top: -55px;
  z-index: 2;
  padding: 23px 30px 17px 30px;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
}

.footer {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 50px;
  border-radius: 50px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  color: rgba(30, 30, 30, 0.8);
  font-weight: 500;
}
</style>
