<template>
  <div class="wrapper">
    <header>
      <nav class="navigation">
        <!-- Navigation Links -->
        <div class="logo">
          <RouterLink to="/">Chisom<span>Tech_sis</span></RouterLink>
        </div>
        <ul class="nav-items">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/repolist">Repo List</RouterLink></li>
        </ul>
      </nav>
    </header>
  </div>

  <!-- Router View -->
  <!-- The content will be rendered based on the route -->
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<style>
/* GLOBAL STYLING */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

body {
  font-family: "Montserrat", sans-serif;
  font-family: "Ultra", serif;
  min-height: 100vh;
  max-width: 100%;
  color: var(--text-color);
}

img{
  max-width: 100%;
  height: auto;
  /* border: 1px solid red; */
}

/*CSS Variables */
:root {
  --bg-body: hsl(0, 0%, 100%);
  --text-color: hsl(211, 75%, 11%);
  --accent: hsl(211, 100%, 50%);
  --bg-card: hsl(212, 87%, 97%);
  --fw-semibold: 600;
  --fw-regular: 400;
  --fs-12: 0.75rem;
  --fs-13: 0.8125rem;
  --fs-14: 0.875rem;
  --fs-16: 1rem;
  --fs-18: 1.125rem;
  --fs-20: 1.25rem;
  --fs-24: 1.5rem;
  --fs-32: 2rem;
  --fs-36: 2.25rem;
  --fs-58: 3.625rem;
  --ff-Title: "Ultra, serif;";
  --ff-body: "Montserrat, sans-serif;"
  --container-width: 68.75rem;
}

/* Wrapper styling */

.wrapper {
  max-width: var(--container-width);
  margin: 0 auto;
  width: calc(100% - 2rem);
  /* border: 1px solid red; */
}

/* Styling media queries */

@media screen and (min-width: 600px) {
  .wrapper {
    width: calc(100% - 4rem);
  }
}
/* Navigation styling */
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: var(--fs-13) 0;
  background-color: var(--bg-body);
  font-family: "Montserrat", sans-serif;
  width: 100%;
}

.nav-items {
  display: flex;
  gap: 10px;
  flex-direction: row;
  list-style: none;
  font-size: 0.75rem;
  font-size: clamp(0.75rem, 0.399rem + 1.6vw, 1rem);
}

a {
  text-decoration: none;
  color: var(--text-color);
}

.logo {
  font-size: 0.75rem;
  font-size: clamp(0.75rem, 0.399rem + 1.6vw, 1rem);
  font-weight: var(--fw-semibold);
  color: var(--accent);
}

.logo span {
  color: var(--accent);
}


</style>
