# # Third-Term-Exam
Vue JS GitHub Repositories Project:
This is a Vue JS application that uses the GitHub API to fetch the repositories of a user and display them on a page. The project includes pagination for the repositories, and a nested route to show individual repositories.

# # HOSTED LINK
https://third-term-exam.vercel.app/

# # INSTALLATION
To install and run the application locally, follow these steps:
1. Clone the repository to your local machine.
2. Install the dependencies:
npm install
3. Run the application:
npm run serve
4. Open the application in your browser at http://localhost:8080.


# # FEATURES

1.Repository List
The application displays a list of repositories for the user specified . The repositories are fetched using the GitHub API at this endpoint: https://api.github.com/users/{{USERNAME}}/repos.
The list of repositories is displayed on a page with pagination. Each repository in the list includes the repository name, description, and the number of stars.


2. Single Repository View
When a user clicks on a repository in the list, they are taken to a page showing the details of the repository. The page includes the repository name, description, language, and the number of stars.
The single repository view is implemented as a nested route in Vue JS.


3. 404 Page
If a user navigates to a route that does not exist, they will be taken to a 404 page. The 404 page includes a message informing the user that the page they are looking for does not exist.


# # TECHNOLOGIES USED
1. Vue JS
2. Vue Router
3. Axios
4. GitHub API






