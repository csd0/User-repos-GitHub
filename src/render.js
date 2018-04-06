// Render user details into specific container
renderUser = (user) => {

    // Gets DOM objects and assigns display
        let details = document.getElementsByClassName('user-profile-data')
        let notFound = document.getElementsByClassName('search-results-not-found')

        notFound[0].style.display = 'none'
        details[0].style.display = 'flex'

    // Provides default values in case user profile has empty bio and/or name
        const bio = user.bio ?
            user.bio
            :
            'No bio filled'

        const name = user.name ?
            user.name
            :
            'No name filled'

    // render details in container
        details[0].innerHTML = 
        `<img src='${user.avatar_url}' alt="user-avatar">
                <div class="user-details">
                    <h5>@${user.login}</h5>
                    <h1>${name}</h1>
                    <h6>${bio}</h6>
                </div>`
}



// Render user repos into specific container
renderRepos = (repos) => {

    // Gets DOM object and assign display
        let repositories = document.getElementsByClassName('user-profile-repositories')

        repositories[0].style.display = 'block'

     // render details in container
        repositories[0].innerHTML =
                '<h4>Repositories</h4> <hr class="headHr">' 
                + 
                repos.map(repo => {
                return `<li>
                        <h5>${repo.name}</h5>
                                <div class="starsForks">
                                    <img src="./resources/images/star.svg"> ${repo.stargazers_count}
                                    <img src="./resources/images/fork.svg"> ${repo.forks_count}
                                </div>
                        </li>
                    <hr>`
            }).join('')
}



// Render 'Does not exist' message when the search has no results
notFound = () => {

    // Gets DOM objects and assigns display
        let notFound = document.getElementsByClassName('search-results-not-found')
        let repositories = document.getElementsByClassName('user-profile-repositories')
        let details = document.getElementsByClassName('user-profile-data')

        repositories[0].style.display = 'none'
        notFound[0].style.display = 'block'
        details[0].style.display = 'none'

    // render message in container
        notFound[0].innerHTML = `<p>Does not exist</p>`
}