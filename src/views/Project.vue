<template>
  <div class="container default">
    <div class="directions">
      <small>
        <a @click="GotoHome">Home </a> >
        <a @click="GotoCollection">{{ this.collectionTitle }} </a> >
        {{ this.title }}</small
      >
    </div>
    <div class="block">
      <div class="inner-block">
        <h2 class="b-text fw-bolder spacing">Project: {{ this.title }}</h2>
        <p class="g-text">{{ this.discription }}</p>
        <div class="margin"></div>
        <div v-if="this.paragraphsId.length > 0">
          <h5>Index</h5>
          <div id="list-example" class="list-group">
            <a
              v-for="(para, index) in paragraphsId"
              :key="para.id"
              class="list-group-item list-group-item-action"
              :href="para"
              >{{ this.paragraphsIdTitle[index].heading }}
            </a>
          </div>
          <div class="margin"></div>
        </div>

        <div
          v-for="para in paragraphs"
          :key="para.id"
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-offset="0"
          class="scrollspy-example"
          tabindex="0"
        >
          <h3
            v-if="!para.links && para.content"
            class="b-text heading mb-2"
            :id="para.id"
          >
            {{ para.heading }}
          </h3>
          <h4
            v-if="!para.links && !para.content"
            class="b-text heading"
            :id="para.id"
          >
            {{ para.heading }}
          </h4>
          <LayoutContent v-if="!para.links" :paragraph="para" />
          <p v-else class="b-text link">
            {{ para.heading }} -
            <a :href="para.content">{{ para.content }}</a>
          </p>
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
      project: null,
      title: "",
      discription: "",
      paragraphs: [],
      paragraphsId: [],
      paragraphsIdTitle: [],
      collectionTitle: "",
    };
  },
  methods: {
    GotoHome() {
      this.$router.push({
        name: "Home",
      });
    },
    GotoCollection() {
      this.$router.push({
        name: "Collection",
        params: { id: this.project.collection_id },
      });
    },
    async load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/projects/${this.$route.params.id}`
        );
        this.project = response.data;
        this.title = this.project.title;
        this.discription = this.project.discription;
        document.title = "P:" + this.title;

        try {
          const response = await axios.get(
            `https://bakedcheese.nl/webserver/paragraphs`
          );
          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].project_id == this.$route.params.id) {
              this.paragraphs.push(response.data[index]);
              if (!response.data[index].links && response.data[index].heading) {
                this.paragraphsId.push("#" + response.data[index].id);
                this.paragraphsIdTitle.push(response.data[index]);
              }
            }
          }
        } catch (err) {
          console.log(err.message);
        }

        const responseCollectionTitle = await axios.get(
          `https://bakedcheese.nl/webserver/collections/${response.data.collection_id}`
        );

        this.collectionTitle = responseCollectionTitle.data.title;
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
.link {
  font-weight: bold;
  padding: 0px 0px 8px 0px;
  margin-top: -5px;
}

.link a {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.heading {
  margin-left: -1.8px;
}
</style>
