<template>
  <div class="container default">
    <div class="directions">
      <small> <a @click="GotoHome">Home </a> > About me</small>
    </div>
    <div class="block">
      <div class="inner-block">
        <h2 class="b-text fw-bolder spacing">About me</h2>
        <p>
          My name is Tim van Daalen, I’m a 21 year old person with a beard. My
          interweb name is Bakedcheese, Bla Bla Bla.
        </p>
        <p class="g-text">I don’t like to be formal…</p>
        <div class="margin"></div>
        <div class="speeddate">
          <h3>Speeddate >>></h3>
          <p>
            I’m an introverted, mood sensitive, dyslexic, male, that likes
            playing and making games, admires the landscapes of nature,
            exploring the world of the unknown and being a nerd.
          </p>
          <p>
            I’m not a fan of interactive sports, but I like to ski and the
            occasionally ‘go down the stairs to get some water’ exercise.
          </p>
          <p>
            And lastly, My humor is mostly dark (not pc) and I’m fascinated
            about the crafts of Hayao Miyazaki and his meth heads at Studio
            ghibli.
          </p>
        </div>
        <div class="margin"></div>
        <div class="myface">
          <h3>My Face</h3>
          <img src="../assets/Images/Me.jpg" alt="" />
        </div>
        <div class="margin"></div>
        <div class="accomplishments">
          <h3>My Expertise</h3>
          <small>Programs</small>
          <div class="accomplishments-content">
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/unity.svg" alt="" />
                <a href="https://unity.com/" target="_blank">Unity</a>
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="known-more-more"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/Unreal.png" alt="" />
                <a href="https://www.unrealengine.com/" target="_blank"
                  >Unreal Engine</a
                >
              </div>

              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/Blender.svg" alt="" />
                <a href="https://www.blender.org/" target="_blank">Blender</a>
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="known-more-more"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/vsc.svg" alt="" />
                <a href="https://code.visualstudio.com/" target="_blank"
                  >Visual studio code</a
                >
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="known-more-more"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/ph.svg" alt="" />
                <a
                  href="https://www.adobe.com/nl/products/photoshop.html"
                  target="_blank"
                  >Adobe - Photoshop</a
                >
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/xd.svg" alt="" />
                <a
                  href="https://www.adobe.com/nl/products/xd.html"
                  target="_blank"
                  >Adobe - Experience Design</a
                >
              </div>
              <div>
                <div class="known"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/github.svg" alt="" />
                <a href="https://github.com/" target="_blank">Github</a>
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
          </div>
          <small>Programming</small>
          <div class="accomplishments-content">
            <div class="content-item">
              <div>
                <img src="../assets/icon/diagram-3.svg" alt="" />
                <a
                  href="https://refactoring.guru/design-patterns/java"
                  target="_blank"
                  >Design patterns (Coding)</a
                >
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/java.svg" alt="" />
                <a href="https://www.java.com/nl/" target="_blank">Java</a>
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="known-more-more"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/JavaScript.svg" alt="" />
                <a
                  href="https://nl.wikipedia.org/wiki/JavaScript"
                  target="_blank"
                  >Javascript</a
                >
              </div>

              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/cpp.svg" alt="" />
                <a href="https://nl.wikipedia.org/wiki/C%2B%2B" target="_blank"
                  >C++</a
                >
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/cs.svg" alt="" />
                <a
                  href="https://nl.wikipedia.org/wiki/C%E2%99%AF"
                  target="_blank"
                  >C#</a
                >
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="known-more-more"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/sql.svg" alt="" />
                <a href="https://nl.wikipedia.org/wiki/SQL" target="_blank"
                  >SQL</a
                >
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/vuejs.svg" alt="" />
                <a href="https://vuejs.org/" target="_blank"
                  >Vue.js (Framework)</a
                >
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="known-more-more"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/nodejs.svg" alt="" />
                <a href="https://nodejs.org/" target="_blank">Node.js</a>
              </div>
              <div>
                <div class="known"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
          </div>
          <small>Language</small>
          <div class="accomplishments-content">
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/nl.png" alt="" />
                Netherlands
              </div>
              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="known-more-more"></div>
                <div class="known-more-more-more"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/en.png" alt="" />
                English
              </div>

              <div>
                <div class="known"></div>
                <div class="known-more"></div>
                <div class="known-more-more"></div>
                <div class="no-known"></div>
              </div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/brands/jp.png" alt="" />
                Japanese
              </div>
              <div>
                <div class="known-little"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
                <div class="no-known"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="margin"></div>
        <div class="history">
          <h3>My Browser History</h3>
          <div class="history-content">
            <div class="content-item">
              <div>
                <img src="../assets/icon/bookmark.svg" alt="" />Made my
                portfolio website
              </div>
              <div class="year">2022</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/bookmark.svg" alt="" />Gap year
              </div>
              <div class="year">2021 - 2022</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/cash-coin.svg" alt="" />Coolblue -
                Advice and service
              </div>
              <div class="year">2020 - 2022</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/book.svg" alt="" />College (Hogeschool)
                - software engineer
              </div>
              <div class="year">2020 - 2021</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/joystick.svg" alt="" />Published my
                first game -
                <a
                  href="https://play.google.com/store/apps/details?id=com.BakedCheeseGames.IGODODGE&gl=NL"
                  >IGO DODGE</a
                >
              </div>
              <div class="year">2020</div>
            </div>

            <div class="content-item">
              <div>
                <img src="../assets/icon/cash-coin.svg" alt="" />Aldi - Shelf
                filler
              </div>
              <div class="year">2018 - 2020</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/cash-coin.svg" alt="" />Jumbo - Shelf
                filler
              </div>
              <div class="year">2016 - 2018</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/book.svg" alt="" />High school
                (Middelbare school)
              </div>
              <div class="year">2014 - 2020</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/cash-coin.svg" alt="" />Paperboy
              </div>
              <div class="year">2014 - 2016</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/joystick.svg" alt="" />Got minecraft
              </div>
              <div class="year">2012</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/book.svg" alt="" />Elementary school
                (Basisschool)
              </div>
              <div class="year">2004 - 2014</div>
            </div>
            <div class="content-item">
              <div>
                <img src="../assets/icon/bookmark.svg" alt="" />Being born
              </div>
              <div class="year">2001</div>
            </div>
          </div>
        </div>
        <div class="margin"></div>
        <div class="social-media">
          <div class="icon">
            <a
              href="https://www.youtube.com/channel/UChhXIjyFOKo95dQ5RxjaJ-A"
              target="_blank"
              ><img src="../assets/icon/yt.svg" alt="youtube"
            /></a>
          </div>
          <div class="icon">
            <a
              href="https://steamcommunity.com/id/ikwileenvriend/"
              target="_blank"
              ><img src="../assets/icon/steam.svg" alt="steam"
            /></a>
          </div>
          <div class="contact" @click="Contact">
            <img src="../assets/icon/mail.svg" alt="" /> Contact me
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    GotoHome() {
      this.$router.push({
        name: "Home",
      });
    },
    Contact() {
      this.$router.push({ name: "Contact" });
    },
  },
};
</script>

<style scoped>
.speeddate h3 {
  color: rgb(255, 94, 0);
  font-style: italic;
  letter-spacing: 3px;
}

.speeddate p {
  margin-left: 15px;
  font-style: italic;
}

.history {
}

.history-content {
}

.history-content .content-item {
  display: flex;
  justify-content: space-between;
  padding: 7px 0px;

  border-radius: 0px;
  font-size: 1rem;
}

@media screen and (max-width: 601px) {
  .history-content .content-item {
    font-size: 0.7rem;
  }
}

.history-content .content-item:not(:last-child) {
  border-bottom: 1px solid black;
}

.history-content .content-item img {
  margin-right: 10px;
}

.year {
  font-style: italic;
}

.history-content .content-item a {
  display: inline;
  color: black;
  cursor: pointer;
  border-bottom: 1px solid white;
  transition: border-bottom 0.05s ease-in-out;
  text-decoration: none;
}

.history-content .content-item a:hover {
  border-bottom: 1px solid black;
}

.myface img {
  margin-top: 5px;
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
}

.accomplishments {
}

.accomplishments-content {
  margin: 2px 0px 10px 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.accomplishments small {
  font-style: italic;
}

.accomplishments-content .content-item a {
  display: inline;
  color: black;
  cursor: pointer;
  border-bottom: 1px solid white;
  transition: border-bottom 0.05s ease-in-out;
  text-decoration: none;
}

.accomplishments-content .content-item a:hover {
  border-bottom: 1px solid black;
}

.accomplishments-content .content-item {
  border-radius: 0px;
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
}

.accomplishments-content .content-item:not(:last-child) {
  border-bottom: 1px solid black;
}

.accomplishments-content .content-item img {
  width: 18px;
  height: 18px;
  margin-right: 12px;
}

.accomplishments-content .content-item div {
  display: flex;
  align-items: center;
}

.accomplishments-content .content-item div div {
  width: 18px;
  height: 18px;
  border-radius: 5px;
}

.accomplishments-content .content-item div div:not(:last-child) {
  margin-right: 5px;
}

.known {
  background-color: #1dd1a1;
}
.known-little {
  background-color: #1dd1a185;
}
.known-more {
  background-color: #54a0ff;
}
.known-more-more {
  background-color: #5f27cd;
}
.known-more-more-more {
  background-color: #feca57;
}
.no-known {
  border: 2px solid rgb(153, 153, 153);
}
.social-media {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.contact {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0px 20px;
  cursor: pointer;
  width: 100%;
}

.contact img {
  margin-right: 12px;
}

.icon {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  background-color: white;
  padding: 5px 10px;
  width: 50px;
  margin-right: 10px;
}

a {
  text-decoration: none;
}
</style>
