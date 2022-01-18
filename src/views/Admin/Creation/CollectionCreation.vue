<template>
  <div class="container" style="max-width: 700px">
    <div class="form">
      <h2>Create new collection</h2>
      <div class="line"></div>
      <div class="margin"></div>
      <h5>Collection content</h5>
      <div class="line"></div>
      <div class="margin"></div>
      <input
        type="text"
        placeholder="Title of collection"
        v-model="this.text[0]"
      />
      <div class="margin"></div>
      <textarea
        class="discription"
        placeholder="Discription of collection"
        v-model="this.text[1]"
      />
      <div class="margin"></div>
      <div class="undertext">
        <h5>First project content</h5>
        <small>leave empty if you don't want to create a project</small>
      </div>

      <div class="line"></div>
      <div class="margin"></div>
      <input
        type="text"
        placeholder="Title of project"
        v-model="this.text[2]"
      />
      <div class="margin"></div>
      <textarea
        class="discription"
        placeholder="Discription of project"
        v-model="this.text[3]"
      />
      <div class="margin"></div>
      <div>
        <button @click="Create">Add</button>
        <div class="margin"></div>
        <button @click="Canel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //text:
  // 0 = collection title
  // 1 = collection discription
  // 2 = project title
  // 3 = project discription

  data() {
    return {
      text: [],

      collection: null,
    };
  },
  beforeCreate() {
    if (!window.sessionStorage.getItem("key")) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    Canel() {
      this.$router.push({ name: "Homepage" });
    },

    async Create() {
      try {
        //check if content has beeen entered
        if (this.text[0] && this.text[1]) {
          //adds new collection
          await axios.post(`https://bakedcheese.nl/webserver/collections`, {
            title: this.text[0],
            discription: this.text[1],
          });

          //check if content has been entered
          if (this.text[2] && this.text[3]) {
            //gets the made id form the added collection
            //this id is used by the making of the project
            const Getresponse = await axios.get(
              `https://bakedcheese.nl/webserver/collections`
            );

            this.collection = Getresponse.data[0];

            //adds new project to collection
            try {
              await axios.post(`https://bakedcheese.nl/webserver/projects`, {
                title: this.text[2],
                discription: this.text[3],
                collection_id: this.collection.id,
              });

              this.$router.push({ name: "Homepage" });
            } catch (err) {
              console.log(err.message);
            }
          } else {
            console.log(
              "Didn't add project, becease there was missing content!"
            );
            this.$router.push({ name: "Homepage" });
          }
        } else {
          console.log("Can't add, because there is no content!");
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/admin.css";
</style>
