<template>
  <div class="wrapper">
    <section class="hero-wrapper">
      <div class="hero">
        <div class="home-title">
          <h1>Hi</h1>
          <h1>My name is <span>Chisom</span></h1>
          <h1>I'm a Frontend Dev</h1>
        </div>
        <p class="home-content">
          I just recently started learning Frontend Development less than a year
          ago. The experience has been mind-blowing but at the same time
          challenging. Sometimes i feel like banging my head around the wall
          while sometimes i feel like superhero especially when i get to fix a
          bug that has been given a headache. I am recently told to do a
          project. I hope you love it.
        </p>
      </div>

      <div class="hero-image">
        <img :src="HomeImage" alt="profile image" />
      </div>
    </section>
  </div>
</template>

<script>
import HomeImage from "../assets/crossPlatformSoftwarePana.png";

export default {
  name: "HomeView",
  data() {
    return {
      HomeImage: HomeImage,
    };
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* Styling for HomeView.vue */
.home-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  font-size: 2rem;
  font-size: clamp(2rem, 0.599rem + 6.4vw, 3rem);
  width: 299px;
  /* border: 1px solid red; */
  margin-bottom: var(--fs-24);
}

.home-title span {
  color: var(--accent);
}

.home-title {
  font-size: 2rem;
  font-size: clamp(2rem, 0.599rem + 6.4vw, 3rem);
  font-family: "Ultra", serif;
}

.home-content {
  font-size: 0.875rem;
  font-size: clamp(0.875rem, 0.5249rem + 1.6vw, 1.125rem);
  font-family: "Ultra", serif;
  font-family: "Montserrat", sans-serif;
  line-height: 159.9%;
}



/*Media queries for home-title */
@media screen and (min-width: 350px) {
  .home-title {
    width: 100%;
  }
  .hero-wrapper{
    margin-top: 1rem;
  }
}

@media screen and (min-width: 56.25em) {
    .hero-wrapper{
      display: flex;
      flex-direction: row;
      
      /* border:1px solid red; */

    }
  .hero{
    width: 50%;
    /* max-width:531px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

   
  }
  .hero-image{
    display: flex;
    flex: 1 0 50%;
    /* border:1px solid red */
  }
  
}
</style>
