<template>
  <div class="container" style="max-width: 900px">
    <div class="block">
      <div class="inner-block">
        <div class="bblock">
          <h2 class="w-text fw-bolder spacing">Project: {{ this.title }}</h2>
        </div>
        <div class="wblock">
          <p class="g-text">{{ this.discription }}</p>
        </div>
        <div class="margin"></div>
        <div v-for="para in paragraphs" :key="para.id">
          <LayoutContent :paragraph="para" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LayoutContent from "../components/layout-content.vue";
export default {
  components: { LayoutContent },
  created() {
    document.title = "...";
    this.load();
  },
  data() {
    return {
      title: "",
      discription: "",
      paragraphs: [],
    };
  },
  methods: {
    async load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/projects/${this.$route.params.id}`
        );
        this.title = response.data.title;
        this.discription = response.data.discription;
        document.title = "P:" + this.title;
        try {
          const response = await axios.get(
            `https://bakedcheese.nl/webserver/webserver/paragraphs`
          );
          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].project_id == this.$route.params.id) {
              this.paragraphs.push(response.data[index]);
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
</style>
