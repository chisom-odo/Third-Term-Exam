<template>
  <div class="repo">
    <!-- Repo Details -->
    <div class="repo-details">
      <h3>
        Name : <span class="s"> {{ repo.name }}</span>
      </h3>
      <h3>
        ID: <span class="s">{{ repo.id }}</span>
      </h3>
      <h3>
        Language: <span class="s">{{ repo.language }}</span>
      </h3>
      <h3>
        Stars: <span class="s">{{ repo.stargazers_count }}</span>
      </h3>
      <h3>
        Created at:
        <span class="s">{{
          moment(repo.created_at).format("ddd MMM DD, YYYY [at] HH:mm a")
        }}</span>
      </h3>
      <h3>
        Updated at:
        <span class="s">{{
          moment(repo.updated_at).format("ddd MMM DD, YYYY [at] HH:mm a")
        }}</span>
      </h3>
      <h3>
        Pushed at:
        <span class="s">{{
          moment(repo.pushed_at).format("ddd MMM DD, YYYY [at] HH:mm")
        }}</span>
      </h3>

      <div class="btn-repo">
        <button class="btn-github">
          <a :href="repo.html_url" target="_blank">View on Github</a>
        </button>
        <RouterLink to="/repolist">
          <button class="btn-repolist">
            <a :href="repo.homepage" target="_blank" >Back to repolist</a>
          </button>
        </RouterLink>

      </div>


    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, onMounted } from "vue";
import moment from "moment";
import axios from "axios";
import { toRefs } from "vue";
import { RouterLink } from "vue-router";
export default {
  name: "Repo",
  data() {
    return {};
  },
  // function to format date
  created() {
    this.moment = moment;
  },

  // function to fetch data from api
  setup() {
    const state = reactive({
      repo: [],
    });
    // get id from url
    const route = useRoute();
    const id = route.params.id;
    console.log(id);

    // fetch data from api
    const fetchRepo = async () => {
      const response = await axios.get(
        `https://api.github.com/repos/chisom-odo/${id}`
      );
      state.repo = response.data;
      console.log(response.data);
    };

    // fetch data on page load
    onMounted(() => {
      fetchRepo();
    });
    return {
      ...toRefs(state),
      fetchRepo,
    };
  },
};
</script>

<style scoped>
.repo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  padding: 20px;
  background-color: #f1f7fe;
  border-radius: 10px;
  border: 5px solid #e0eeff;
  margin: 30px auto;
}

.repo-details {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: var(--fs-16);
  gap: 16px;
  background-color: #e0eeff;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  line-height: 166%;
}

h3 {
  font-weight: var(--fw-semibold);
  font-size: var(--fs-16);
  color: var(--accent);
}

.s {
  font-weight: var(--fw-regular);
  font-size: var(--fs-16);
  color: var(--text-color);
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-14);
  cursor: pointer;
}

.btn-repolist {
  background-color: var(--accent);
  color:var(--text-color);
  margin-top: 16px;
}

.btn-github {
  background-color: var(--text-color);
  color: var(--accent);
  margin-top: 16px;
  border: 1px solid var(--accent);
}

.btn-repo{
  margin-top:10px;
}
a {
  text-decoration: none;
  color: inherit;
}

</style>
