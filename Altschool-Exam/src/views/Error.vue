<template>
  <div class="Err wrapper">
    <div class="Error-text">
      <h1 class="wrapper">Error page</h1>
      <p>{{ message }}</p>
    </div>
    <div class="Error">
      <img :src="Error" alt="profile image" class="Error-img" />
    </div>
  </div>
</template>

<script>
import Error from "../assets/error.jpg";
export default {
  name: "Error",
  data() {
    return {
      Error: Error,
      message: "Sorry, we couldn't find the page you were looking for.",
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 1.5rem;
  font-size: clamp(1.5rem, -0.6000000000000001rem + 9.6vw, 3rem);
  margin: 10px 0;
  color: var(--accent);
  text-align: center;
}
p {
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-size: 0.875rem;
    font-size: clamp(0.875rem, 0.5249999999999999rem + 1.6vw, 1.125rem);
}

.Error-text {
  max-width: 500px;
  margin: 24px auto;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Error {
  /* border: 1px solid red; */
  width: 70%;
  max-width: 500px;
}

.Err {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>
