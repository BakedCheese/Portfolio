<template>
  <div class="container" style="max-width: 1100px">
    <div class="form">
      <h2>Edit picture: {{ this.alt }}</h2>
      <div class="line"></div>
      <div class="margin"></div>
      <h5>picture content</h5>
      <div class="line"></div>
      <div class="margin"></div>
      <input type="text" placeholder="URL" v-model="this.url" />
      <div class="margin"></div>
      <input type="text" placeholder="ALT" v-model="this.alt" />
      <div class="margin"></div>
      <input type="text" placeholder="Caption" v-model="this.cap" />
      <div class="margin"></div>
      <input type="text" placeholder="Reference" v-model="this.ref" />
      <div class="margin"></div>
      <div>
        <div class="margin"></div>
        <select v-if="this.canChooseOrder" v-model="this.orderObject">
          <option v-for="pic in pictures" v-bind:value="pic" :key="pic.id">
            ID: {{ pic.id }} - Heading: {{ pic.alt }} - Order:
            {{ pic.order_in_paragraph + 1 }}
          </option>
        </select>
      </div>

      <div class="margin"></div>
      <div>
        <button @click="Edit">Edit</button>
        <div class="margin"></div>
        <button @click="Canel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: "",
      alt: "",
      cap: "",
      ref: "",
      picture: null,
      pictures: [],
      first_selected: null,
      selected: null,
      first_orderObject: null,
      orderObject: null,
      canChooseOrder: true,
    };
  },
  beforeCreate() {
    if (!window.sessionStorage.getItem("key")) {
      this.$router.push({ name: "Login" });
    }
  },

  mounted() {
    this.Load();
  },
  methods: {
    Canel() {
      this.$router.push({ name: "Homepage" });
    },

    onSelectChange() {
      if (this.selected != this.first_selected) {
        this.canChooseOrder = false;
      } else {
        this.canChooseOrder = true;
      }
    },

    async Edit() {
      //Change order in paragraph with other picture
      if (this.first_orderObject != this.orderObject) {
        try {
          //change the picture (order) your are editing
          await axios.put(
            `https://bakedcheese.nl/webserver/pictures/${this.$route.params.id}`,
            {
              url: this.url,
              alt: this.alt,
              caption: this.cap,
              reference: this.ref,
              order_in_paragraph: this.orderObject.order_in_paragraph,
            }
          );

          //change the paragraph order, with you're switching.
          await axios.put(
            `https://bakedcheese.nl/webserver/pictures/${this.orderObject.id}`,
            {
              order_in_paragraph: this.first_orderObject.order_in_paragraph,
            }
          );
        } catch (err) {
          console.log(err.message);
        }
      } else {
        try {
          await axios.put(
            `https://bakedcheese.nl/webserver/pictures/${this.$route.params.id}`,
            {
              url: this.url,
              alt: this.alt,
              caption: this.cap,
              reference: this.ref,
            }
          );
        } catch (err) {
          console.log(err.message);
        }
      }

      this.$router.push({ name: "Homepage" });
    },

    async Load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/pictures/${this.$route.params.id}`
        );

        this.picture = response.data;
        this.url = this.picture.url;
        this.alt = this.picture.alt;
        this.cap = this.picture.caption;
        this.ref = this.picture.reference;
        this.first_selected = this.picture.paragraph_id;
        this.orderObject = this.picture;
        this.first_orderObject = this.orderObject;

        try {
          const responsePicture = await axios.get(
            `https://bakedcheese.nl/webserver/pictures`
          );

          responsePicture.data.forEach((resPic) => {
            if (resPic.paragraph_id == this.picture.paragraph_id) {
              this.pictures.push(resPic);
            }
          });
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
@import "../../../assets/css/admin.css";
</style>
