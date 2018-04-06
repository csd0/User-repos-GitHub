/**
 * GitHub API client
 * 
 * @version 0.1
 */

const githubApi = {

    /**
     * Make a request to GitHub API v3
     * 
     * @param {String} url
     * 
     * @returns {Promise<Response>} Data received from endpoint
     * 
     * @throws {Error} If something go wrong
     *  
     */
    _call: function (url) {

        const baseUrl = 'https://api.github.com'
        const completeUrl = `${baseUrl}${url}`

        return new Promise((resolve, reject) => {
            fetch(completeUrl)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    return resolve(data);
                })
                .catch((err) => {
                    reject(err)
                })
        })
            .catch((err) => {
                throw new Error(err)
            })
    },

     /**
     * API call to search specific user details
     * 
     * @param {String} username
     * 
     * @returns {Promise<Response>} Data received from endpoint
     * 
     * @throws {Error} If something go wrong
     *  
     */
    searchUserByUsername: function (username) {
        let url = `/users/${username}`

        return this._call(url)
        
        .then(res => res)
    },

     /**
     * API call to search specific user repositories
     * 
     * @param {String} username
     * 
     * @returns {Promise<Response>} Data received from endpoint
     * 
     * @throws {Error} If something go wrong
     *  
     */
    searchReposByUsername: function (username) {
        let url = `/users/${username}/repos`

        return this._call(url)
        
        .then(res => res)
    }

}