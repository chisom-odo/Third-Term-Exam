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
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, onMounted } from "vue";
import moment from "moment";
import axios from "axios";
import { toRefs } from "vue";
export default {
  name: "Repo",
  data() {
    return {
    
    };
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
        `https://api.github.com/repos/chisom6924536/${id}`
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
