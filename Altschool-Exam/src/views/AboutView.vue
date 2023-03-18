<template>
  <div class="about wrapper">
    <h1 class="about-title">About Project</h1>
    <div class="about-wrapper">
      <p class="about-content">
        After several months of learning <span>vue.js</span> . The instructors
        decided that it was finally time to do a project. The projects was that
        i should build a repository project using my <span>github API</span>,
        Implement <span>nested routes</span>, create a wildcard page to
        <span>catch errors</span> as well as implement <span>pagination</span>.
        To tell you so far it has been so difficult and challenging at the very
        least. But i got a lot of help from my community as well as a special
        friend. Building this project made me realize that i can do anything i
        set my mind to and i should never let my fears define me. I still have a
        lot to anything and i am ready to hack this career path i have chosen. I
        hope you love this mini project.
      </p>
      <img :src="Image" alt="profile image" class="image" />
    </div>
  </div>
</template>

<script>
import Image from "../assets/handCoding.jpg";
export default {
  name: "AboutView",
  data() {
    return {
      Image: Image,
    };
  },
  components: {},
};
</script>

<style scoped>
/* Styling for AboutView.vue */
h1 {
  font-size: 2rem;
  font-size: clamp(2rem, 0.599rem + 6.4vw, 3rem);
  margin-bottom: var(--fs-24);
  margin-top: var(--fs-16);
  color: var(--accent);
}

p {
  font-family: "Montserrat", sans-serif;
  line-height: 159.9%;
  font-size: 0.875rem;
  font-size: clamp(0.875rem, 0.5249999999999999rem + 1.6vw, 1.125rem);
}
p span {
  color: var(--accent);
  font-weight: var(--fw-semibold);
}

.about {
  /* max-width: 653px; */
  margin-top: 2rem;
}

.about-content {
  /* min-height:325px; */


  width: 100%;
  /* border:1px solid red; */
}
.about-wrapper {
  /* border:1px solid red; */
}

/* Styling media queries for AboutView.vue */

@media screen and (min-width: 56.25em) {
  .about-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    /* border:1px solid red; */
  }

  .about-content {
    width: 50%;
    margin-top: 3.5rem;
  }

  .about-title {
    display: inline;
    margin-top: 2rem;
  }
  .image {
    width: 50%;
  }
}
</style>
