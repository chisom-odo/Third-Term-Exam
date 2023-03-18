<template>
  <!-- Loading state -->
  <div v-if="loading"><p>loading...</p></div>
  <div v-else class="wrapper">
    <!--  Card Container -->
    <div class="card-container">
      <div class="card">
      <div class="card-title">
        <h1>Repositories</h1>
      </div>
      <div class="card-desc">
        <p>
          Here is a list of  my Repositories generated using the Github API
        </p>
      </div>
      <!-- Card Component -->
      <div id="card-list">
        <div class="card-component" v-for="repo in repos" key="repo._id">
      
      <!-- Repo Details -->
     
      <div class="repo-details">
        <div class="image">
        <img
          src="https://avatars.githubusercontent.com/u/108188979?v=4"
          alt="profile image"
        />
      </div>

        <RouterLink :to="{ name: 'repo-id', params: { id: repo.name } }">
           Name: <span class="repo-name"> {{ repo.name }} </span> 
        </RouterLink>
        <h3>
          ID: <span class="repo-name">{{ repo.id }}</span>
        </h3>
        <button v-on:click="goToRepo(repo.name)" class="view">Go to Repo</button>
      </div>
    </div>
      </div>
      <!-- Pagination -->
      <div class="pagination">
        <button
          v-on:click="setCurrentPage(currentPage - 1)"
          :disabled="currentPage === 1"
        >
          Previous
        </button>
        <button
          v-for="page in pageCount"
          :key="page"
          v-on:click="setCurrentPage(page)"
          :class="{ active: page === currentPage }"
        >
          {{ page }}
        </button>
        >
        <button
          v-on:click="setCurrentPage(currentPage + 1)"
          :disabled="currentPage === pageCount"
        >
          Next
        </button>
      </div>
  
    </div>
    </div>
  
  

    <!-- Pagination -->
    
  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import moment from "moment";
import axios from "axios";
import { toRefs } from "vue";
import { RouterLink } from "vue-router";

export default {
  name: "card",
  data() {
    return {
      currentPage: 1,
      pageSize: 4,
      totalItems: 0,
    };
  },

  methods: {
    // Function to set the current page
    setCurrentPage(page) {
      this.currentPage = page;
    },
    updateHandler(page) {
      this.currentPage = page;
    },

    //  Function to go to the repo page
    goToRepo(id) {
      this.$router.push({ name: "repo-id", params: { id: id } });
    },
  },

  computed: {
    //  Function to display the repos on the page
    repos() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.repos.slice(start, end);
    },

    //  Function to display the number of pages
    pageCount() {
      return Math.ceil(this.repos.length / this.pageSize);
    },
  },
  //  Function to display the time the repo was created
  created() {
    this.moment = moment;
  },

  
  setup() {
    // Setting up the state
    const state = reactive({
      repos: [],
      loading: true,
    });

    //  Setup function for fetching data from the API and displaying it on the page
    const fetchRepo = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/chisom-odo/repos`
        );
        state.repos = response.data;

        // Setting the loading state to false
        state.loading = false;

        
      } catch (err) {
        console.log(err);
      }

      //   console.log(response.data);
    };
    //  Fetching data from the API
    onMounted(() => {
      fetchRepo();
    });

    // Computed property to check if data exists
    const dataExists = computed(() => {
      return state.repos.length > 0;
    });

    const currentPage = computed({
      get() {
        return state.currentPage;
      },
      set(page) {
        this.currentPage = page;
        if (!this.loading) {
          fetchRepo();
        }
      },
    });

    return {
      ...toRefs(state),
      fetchRepo,
      dataExists,
      // currentPage,
    };
  },
};
</script>

<style scoped>
  /*Styling the card component*/

  .card{
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
  }
.card-title h1{
    color:var(--accent);
    font-size: clamp(2rem, 0.599rem + 6.4vw, 3rem);
    margin-bottom: var(--fs-24);
    margin-top: var(--fs-16);
  }

  .card-desc p{
    font-family: "Montserrat", sans-serif;
    line-height: 159.9%;
    font-size: 0.875rem;
    font-size: clamp(0.875rem, 0.5249rem + 1.6vw, 1.125rem);
    margin-bottom: var(--fs-24);
    margin-top: var(--fs-16);
  }
/* Styling text */
  h3{
    font-weight:var(--fw-semibold);
  }

  /* Styling images */
  .image{
    width :60px;
    height:60px;
    margin-top:16px;
  }
  img{
    border-radius:50%;
    width:100%;
    object-fit: cover;
  }

  /* Styling repo details or card component*/
  #card-list{
    display: flex;
    flex-direction:column;
    gap:16px;
    margin-bottom:1.5rem;
    justify-content: center;


  }

  .repo-name {
    display: flex;
    white-space: nowrap;
    flex:1 0 auto;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-size: clamp(1rem, 0.5249rem + 1.6vw, 1rem);
    line-height: 159.9%;
    color:var(--text-color
    );

    font-weight: var(--fw-regular);
  }

  .repo-details{
    display: flex;
    flex:1;
    flex-wrap:wrap;
    flex-direction: column;
    justify-content: center;
    gap:16px;
    border:3px solid var(--accent);
    border-radius:8px;
    padding:20px;
    max-width:400px;
    height:100%;
  }

  a {
    font-family: "Montserrat", sans-serif;
    font-weight:var(--fw-semibold);
  }

  h3{
    font-family: "Montserrat", sans-serif;
    font-weight: var(--fw-semibold);
  }

  /* Styling buttons */
  button.view{
    background-color:var(--accent);
    color:var(--bg-card);
    border: none;
    border-radius: 32px;
    padding: 0.6rem 1rem;
    margin-bottom:16px;
    font-size: 1rem;
    font-weight: var(--fw-semibold);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .view:hover{
    background-color:var(--text-color);
    border: 2px solid var(--accent);
  }

  /* Styling the pagination container */
  .pagination {
    display: flex;
    justify-content:left;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .pagination button {
    background-color: var(--bg-card);
    color: var(--text-color);
    border: none;
    border-radius: 32px;
    padding: 0.4rem 0.3rem;
    margin: 0 0.5rem;
    font-size: 1rem;
    font-weight: var(--fw-semibold);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
  }
  /* Styling the active page */
  .pagination .active {
    background-color: var(--accent);
    color: var(--bg-card);
    border: none;
   
  }
  /* Styling the disabled button */

  .pagination .disabled {
    background-color: var(--bg-card);
    color: var(--text-color);
    border: none;
    cursor: not-allowed;
  }

  /* Styling the hover effect */
  .pagination button:hover {
    background-color: var(--text-color);
    color: var(--bg-card);
  }


/* Styling Media Queries */

  @media screen and (min-width: 600px ) {
    #card-list{
      display:grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;
      width:100%;
    }
    .repo-details{
      width:100%;

    }
    .pagination button{
      padding: 0.6rem 1rem;
      
    }
  }

  @media screen and (min-width:56.25em){
    #card-list{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap:16px;
      margin: auto;
    }
    .repo-details{
      width:100%;

    }
  }

</style>
