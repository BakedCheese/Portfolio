<template>
  <div class="container default" style="max-width: 900px">
    <div class="block">
      <div class="inner-block">
        <div class="bblock">
          <h2 class="w-text fw-bolder spacing">About me</h2>
        </div>
        <div class="wblocktitle">
          <p class="g-text">
            My name is Tim van Daalen, I'm a Dutch software engineer student at
            The Hague University of Applied Sciences. I like playing and making
            games, exploring the world of the unknown, traveling and being a
            nerd.
          </p>
        </div>
        <div class="margin"></div>
        <div class="margin head">
          <div class="w-text fw-bold spacing">More content is coming.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.wblocktitle {
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

.wblock {
  background-color: #f9f9f9;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  border-radius: 50px;
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

.text-list .text-block {
  display: flex;
  text-align: start;
  margin: 15px 0px;
}

.text-list .text {
  margin-left: 10px;
}

.text-list img {
  padding-top: 9px;
  align-self: flex-start;
  margin-right: 15px;
  width: 8px;
}

.text-list h4 {
  text-align: start;
  margin-bottom: 20px;
}

.picture {
  border-radius: 50px;
  width: 100%;
  height: 280px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: #f9f9f9 0px solid;
}
</style>
