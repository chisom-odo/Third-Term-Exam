<template>
  <div class="about wrapper">
    <!-- About section -->
    <h1 class="about-title">About Project</h1>
    <div class="about-wrapper">
      <p class="about-content">
        After several months of learning <span>vue.js</span> . The instructors
        decided that it was finally time to do a project. The goal of projects
        was to build a repository project using my <span>github API</span>,
        Implement <span>nested routes</span>, create a wildcard page to
        <span>catch errors</span> as well as implement <span>pagination</span>.
        <br />
        <br />
        To tell you the truth so far it has been so difficult and challenging at
        the very least. But i got a lot of help from my community as well as a
        special friend. Building this project made me realize that i can do
        anything i set my mind to and i should never let my fears define me.
        <br />
        <br />
        I still have a lot to anything and i am ready to hack this career path i
        have chosen. I hope you love this mini project.
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
  line-height: 163.9%;
  font-size: 0.875rem;
  font-size: clamp(0.875rem, 0.5249999999999999rem + 1.6vw, 1.125rem);
}
p span {
  color: var(--accent);
  font-weight: var(--fw-semibold);
}

.about {
  margin-top: 2rem;
}

.about-content {
  width: 100%;
}


/* Styling media queries for AboutView.vue */

@media screen and (min-width: 56.25em) {
  .about-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
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
