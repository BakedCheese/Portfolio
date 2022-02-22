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
            I’m an introverted, mood sensitive, dyslexic, black and white
            thinker, that likes playing and making games, admires the landscapes
            of nature, exploring the world of the unknown and being a nerd.
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
        <div class="disabilities">
          <h3>Disabilities</h3>
          <p>
            With what I said earlier that I am an introverted, mood-sensitive,
            dyslexic, black and white thinker. By this I did not mean to say
            that I am broken/defective. What I mean to say is that those things
            are the things that made me, me.
          </p>
          <p>
            And I’m happy that I got those “disabilities”, for example being
            dyslexic has its cons, like not being able to read/write words
            properly, but it also has its pros, like thinking more visually and
            getting more time on tests xD.
          </p>
          <p>
            <small
              >Side note - Although I’m saying that I think black and white. It
              has blend more to gray over the years.</small
            >
          </p>
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
            <div class="content-item">
              <div>
                <img src="../assets/icon/bookmark.svg" alt="" />Being made
              </div>
              <div class="year">2000</div>
            </div>
          </div>
        </div>
        <div class="margin"></div>
        <h4 class="b-text fw-bold spacing">More content is coming.</h4>
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

.content-item {
  display: flex;
  justify-content: space-between;
  padding: 7px 0px;

  border-radius: 0px;
  font-size: 1rem;
}

@media screen and (max-width: 601px) {
  .content-item {
    font-size: 0.7rem;
  }
}

.content-item:not(:last-child) {
  border-bottom: 1px solid black;
}

.content-item img {
  margin-right: 10px;
}

.year {
  font-style: italic;
}

a {
  display: inline;
  color: black;
  cursor: pointer;
  border-bottom: 0px solid black;
  transition: border-bottom 0.05s ease-in-out;
  text-decoration: none;
}

a:hover {
  border-bottom: 1px solid black;
}

.myface img {
  margin-top: 5px;
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
}
</style>
