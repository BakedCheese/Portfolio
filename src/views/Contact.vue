<template>
  <div class="container default">
    <div class="directions">
      <small>
        <a @click="GotoHome">Home </a> > <a @click="GotoAbout">About me </a> >
        Contact</small
      >
    </div>
    <div class="block">
      <div class="inner-block">
        <h2 class="b-text fw-bolder">Contact me</h2>
        <p class="g-text">
          Welcome to the contact page, if you have any questions, remarks or
          just want to chat mail me.
        </p>
        <div class="margin"></div>
        <form ref="form" @submit.prevent="sendEmail">
          <label class="b-text">Name</label>
          <input class="input" type="text" name="user_name" />
          <div class="margin"></div>
          <label class="b-text">Email</label>
          <input class="input" type="email" name="user_email" />
          <div class="margin"></div>
          <label class="b-text">Message</label>
          <textarea class="message" name="message"></textarea>
          <div class="margin"></div>
          <input class="submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  methods: {
    GotoHome() {
      this.$router.push({
        name: "Home",
      });
    },
    GotoAbout() {
      this.$router.push({
        name: "AboutMe",
      });
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_ovsmqr5",
          "template_hpisuco",
          this.$refs.form,
          "user_QqgaABYvHlW7BpM7tRaL0"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.$router.push({ name: "Home" });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
}

label {
  margin-bottom: 10px;
}

.input {
  border-radius: 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px inset;
  padding: 10px;
}

.message {
  border-radius: 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px inset;
  padding: 10px;
  min-height: 200px;
}

.submit {
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  color: rgba(30, 30, 30, 0.8);
  font-weight: 500;
  font-size: 1.3rem;
  transition: all 0.2s ease-in-out;
}
.submit:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 6px;
  color: rgba(30, 30, 30, 1);
}
</style>
