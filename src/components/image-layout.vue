<template>
  <div class="image-holder">
    <h2 v-if="picture.alt" class="title" :class="{ active_tit: this.big }">
      {{ picture.alt }}
    </h2>
    <div class="caption" :class="{ active_cap: this.big }">
      {{ picture.caption }}
    </div>

    <img
      class="picture"
      @click="this.big = !this.big"
      :src="picture.url"
      :alt="picture.alt"
    />

    <div class="buttons" :class="{ active_but: this.big }">
      <a
        v-if="this.big"
        :class="{ button_full: !picture.reference }"
        @click="biggerPicture"
        style="margin-left: 10px"
      >
        <img src="../assets/icon/arrows-fullscreen.svg" alt="fullscreen" />
      </a>
      <a
        v-if="this.big"
        :href="picture.url"
        :class="{ button_full: !picture.reference }"
        target="_blank"
      >
        <img src="../assets/icon/box-arrow-up-right.svg" alt="fullscreen" />
      </a>
      <a
        v-if="picture.reference && this.big"
        :href="picture.reference"
        target="_blank"
        style="margin-right: 10px"
      >
        <img src="../assets/icon/link-45deg.svg" alt="reference" />
      </a>
    </div>

    <div v-if="this.bigger" class="bigPicture" @click="smallerPicture">
      <div><img :src="picture.url" :alt="picture.alt" /></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["picture"],

  data() {
    return {
      big: false,
      bigger: false,
      referenceTitle: "",
    };
  },

  mounted() {
    if (this.picture.reference) {
      this.referenceTitle = this.picture.reference.substring(0, 20);
    }
  },

  methods: {
    biggerPicture() {
      this.bigger = !this.bigger;
      document.body.classList.add("no-scroll");
    },
    smallerPicture() {
      this.bigger = !this.bigger;
      document.body.classList.remove("no-scroll");
    },
  },
};
</script>

<style scoped>
.picture {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.active_tit {
  font-size: 1.4rem !important;
  margin-bottom: 10px !important;
}

.title {
  transition: all 0.2s ease-in-out;
  font-size: 0rem;
  margin-bottom: -10px;
}

.active_but {
  opacity: 1 !important;
  height: 50px !important;
  margin: 10px auto 0px auto !important;
}

.buttons {
  transition: all 0.2s ease-in-out;
  height: 0px;
  opacity: 0;
  width: 100%;
  display: flex;
  margin: 0px;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.buttons > a {
  border-radius: 10px;
  padding: 10px 0px 13px 0px;
  text-align: center;
  width: 100%;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
}

.buttons_full {
  justify-content: start !important;
}
.buttons > a:hover {
  background-color: rgb(243, 243, 243);
}

.caption {
  transition: all 0.2s ease-in-out;
  font-size: 0rem;
  margin-bottom: 0px;
}

.active_cap {
  font-size: 0.9rem !important;
  margin-bottom: 13px !important;
}

.bigPicture {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bigPicture div {
  padding: 5%;
}

.bigPicture img {
  border-radius: 10px;
  width: 100%;
  max-height: 100%;
}
</style>
