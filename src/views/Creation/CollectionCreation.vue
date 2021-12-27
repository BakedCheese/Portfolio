<template>
  <div class="container mt-3">
    <h2>Create new Collection</h2>
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
        <div class="submit" @click="Create">Create</div>
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

  methods: {
    Canel() {
      this.$router.push({ name: "Home" });
    },
    async Create() {
      try {
        const response = await axios.post(
          `http://portfolio-eck7c.ondigitalocean.app:5000/collections`,
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
