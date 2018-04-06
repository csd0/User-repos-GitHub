// Search logic associated to form event submit
const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Username searched captured from DOM
    const username = document.getElementsByName('search-field')[0].value

    // API 1st call render user data or no results message
    githubApi.searchUserByUsername(username)
        .then((res) => {

            res.message === 'Not Found' ?
                notFound()
                :
                renderUser(res)

            return res.login
        })
        // API 2nd call render user repos, in case
        .then((res) => {

            res !== undefined ?
                githubApi.searchReposByUsername(res)
                    .then((res) => {
                        renderRepos(res)
                    })
                    .catch(err => console.log(err))
                :
                undefined

        })
        .catch(err => console.log(err))

})