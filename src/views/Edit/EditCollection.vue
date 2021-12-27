<template>
  <div class="container mt-3">
    <h2>Edit collection {{ this.title }}</h2>
    <div class="middleLine"></div>
    <div class="mt-3 form">
      <p><input type="text" placeholder="Title..." v-model="this.title" /></p>
      <p>
        <textarea
          class=""
          placeholder="Discription..."
          v-model="this.discription"
        />
      </p>
      <div>
        <div class="submit" @click="Edit">Edit</div>
        <div class="cancel mt-3" @click="Canel">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      discription: "",
    };
  },

  created() {
    this.load();
  },

  methods: {
    Canel() {
      this.$router.push({ name: "Home" });
    },
    async load() {
      try {
        const response = await axios.get(
          `http://portfolio-eck7c.ondigitalocean.app:5000/collections/${this.$route.params.id}`
        );
        this.title = response.data.title;
        this.discription = response.data.discription;
      } catch (err) {
        console.log(err.message);
      }
    },

    async Edit() {
      try {
        const response = await axios.put(
          `http://localhost:5000/collections/${this.$route.params.id}`,
          {
            title: this.title,
            discription: this.discription,
          }
        );
        this.$router.push({ name: "Home" });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style></style>
