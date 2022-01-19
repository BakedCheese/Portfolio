<template>
  <img
    v-if="!this.check"
    @click="onCheck"
    src="../../../assets/icon/trash.svg"
    alt="Goto"
  />
  <div class="check" v-else>
    <div class="okay" @click="Delete">Delete</div>
    <div class="no" @click="onCheck">Cancel</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["item", "id"],
  data() {
    return {
      check: false,
    };
  },
  methods: {
    onCheck() {
      this.check = !this.check;
    },

    async Delete() {
      try {
        const response = await axios.delete(
          `https://bakedcheese.nl/webserver/${this.$props.item}/${this.$props.id}`
        );
        this.$router.go();
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
.check {
  display: flex;
  text-align: center;
  margin-left: 10px;
}
.check div {
  padding-top: 3px;
  width: 80px;
  height: 34px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
}

.check div:hover {
  box-shadow: rgba(0, 0, 0, 0) 0px 3px 6px;
}

.okay {
  background-color: #feca57;
  margin-right: 10px;
}

.no {
  background-color: #48dbfb;
}
</style>
