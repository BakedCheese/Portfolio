<template>
  <div class="container" style="max-width: 450px">
    <div class="margin"></div>
    <form>
      <p>
        <input
          type="text"
          required
          placeholder="username"
          v-model="this.username"
        />
      </p>
      <p>
        <input
          type="password"
          required
          placeholder="password"
          v-model="this.password"
        />
      </p>
      <p><button @click.prevent="login">Login</button></p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log("input data...");
      try {
        const response = await axios.post(
          `https://bakedcheese.nl/webserver/login`,
          {
            username: this.username,
            password: this.password,
          }
        );

        if (response.data) {
          console.log(response.data);
          window.sessionStorage.setItem("key", true);
          this.$router.push({ name: "Homepage" });
        } else {
          window.sessionStorage.setItem("key", false);
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
form {
  padding: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  background-color: #f9f9f9;
  border-radius: 50px;
}
form input {
  border: none;
  padding: 20px;
  max-width: 300px;
  width: 100%;
  border-radius: 50px;
}
form button {
  border: none;
  padding: 15px;
  max-width: 300px;
  width: 100%;
  border-radius: 50px;
  font-weight: bolder;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
}
form button:active {
  box-shadow: rgba(0, 0, 0, 0) 0px 3px 6px;
}
</style>
