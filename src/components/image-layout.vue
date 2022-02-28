<template>
  <div class="image-holder">
    <h2 class="title" :class="{ active_tit: this.big }">{{ picture.alt }}</h2>
    <div class="caption" :class="{ active_cap: this.big }">
      {{ picture.caption }}
    </div>
    <img
      class="picture"
      :class="{ active_pic: this.big }"
      @click="this.big = !this.big"
      :src="picture.url"
      :alt="picture.alt"
    />
    <div class="buttons" :class="{ active_but: this.big }">
      <a
        v-if="this.big"
        :href="picture.url"
        :class="{ button_full: !picture.reference }"
        target="_blank"
      >
        <img src="../assets/icon/arrows-fullscreen.svg" alt="fullscreen" />
      </a>
      <a
        v-if="picture.reference && this.big"
        :href="picture.reference"
        target="_blank"
      >
        <img src="../assets/icon/link-45deg.svg" alt="reference" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["picture"],

  data() {
    return {
      big: false,
      referenceTitle: "",
    };
  },

  mounted() {
    if (this.picture.reference) {
      this.referenceTitle = this.picture.reference.substring(0, 20);
    }
  },
};
</script>

<style scoped>
.picture {
  border-radius: 10px;
  width: 100%;
  height: 170px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  transition: height 0.4s ease-in-out;
  cursor: pointer;
}

.active_pic {
  height: 500px;
}
.active_tit {
  font-size: 1.4rem !important;
  margin-bottom: 10px !important;
}

.title {
  transition: all 0.4s ease-in-out;
  font-size: 0rem;
  margin-bottom: -10px;
}

.active_but {
  opacity: 1 !important;
  height: 50px !important;
  margin: -60px auto 35px auto !important;
}

.buttons {
  transition: all 0.4s ease-in-out;
  height: 0px;
  opacity: 0;
  width: 94%;
  display: flex;
  margin: 0px;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.buttons > a {
  border-radius: 10px;
  padding: 10px 0px 13px 0px;
  text-align: center;
  width: 50px;
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
  transition: all 0.1s ease-in-out;
  font-size: 0rem;
}

.active_cap {
  font-size: 0.9rem;
  margin-bottom: 13px;
}
</style>
