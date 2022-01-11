<template>
  <div class="container" style="max-width: 450px">
    <div class="block">
      <div class="inner-block">
        <div class="bblock">
          <h2 class="w-text fw-bolder spacing">Hello . Osu . Morge</h2>
        </div>
        <div class="wblock">
          <p class="g-text">
            My name is Tim van Daalen, I'm a Dutch software Engineer student at
            The Hague University of Applied Sciences. I like playing and making
            games, exploring the world of the unknown, traveling and being a
            nerd.
          </p>
        </div>
        <div class="right-side">
          <div class="button button-under-object">About me</div>
        </div>
        <div class="margin"></div>
        <div class="margin head">
          <div class="w-text fw-bold spacing">Latest Collections</div>
        </div>
        <div class="some-collections">
          <ClickablePictureCollection :collection_id="5" />
          <div class="margin"></div>
          <ClickablePictureCollection :collection_id="2" />
        </div>
        <div class="right-side">
          <div class="button button-under-object" @click="AllCollection">
            All collections
          </div>
        </div>
        <div class="margin"></div>
        <footer class="footer">Made by BakedCheese</footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClickablePictureCollection from "../components/clickable-picture-collection.vue";
export default {
  components: { ClickablePictureCollection },
  data() {
    return {
      collections: [],
    };
  },

  created() {
    this.load();
    document.title = "Welcome";
  },

  methods: {
    Create() {
      this.$router.push({ name: "CreateCollection" });
    },

    AllCollection() {
      this.$router.push({ name: "AllCollections" });
    },
    async load() {
      try {
        const response = await axios.get(
          `https://bakedcheese.nl/webserver/collections`
        );
        this.collections = response.data;
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
.some-collections {
  padding: 0px;
}

.spacing {
  letter-spacing: 3px;
}

.bblock {
  color: #f9f9f9;
  background-color: #1e1e1e;
  border-radius: 50px;
  width: 100%;
  max-width: 500px;
  height: 183px;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  letter-spacing: 5px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  padding-bottom: 20px;
}

.wblock {
  color: rgba(30, 30, 30, 0.8);
  background-color: #f9f9f9;
  border-radius: 50px;
  width: 100%;
  max-width: 500px;
  height: 184px;
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

@media only screen and (max-width: 600px) {
  .wblock {
    padding: 26px 28px 14px 28px;
    line-height: 1.4rem;
    font-size: 0.9rem;
  }
}
@media only screen and (max-width: 300px) {
  .wblock {
    padding: 26px 28px 14px 28px;
    line-height: 1rem;
    font-size: 0.8rem;
  }
}

.button {
  background-color: #2a6e47;
  border-radius: 0px 32px 32px 32px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  height: 50px;
  width: 200px;
  color: #f9f9f9;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 1.3rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: #f9f9f9 0px solid;
}

.button:hover {
  border: #f9f9f9 5px solid;
  border-radius: 32px;
}
.button-under-object {
  margin-top: 15px;
}
.right-side {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
}
.footer {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 50px;
  border-radius: 50px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  color: rgba(30, 30, 30, 0.8);
  font-weight: 500;
}
</style>
