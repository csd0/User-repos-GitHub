describe('GitHub API client', () => {
    let target = githubApi

    // setTimeout prevents overlapping calls & throwing false negatives

    // next 2 tests expect positive results
    describe('searchUserByUsername', () => {
        let matchingUser

        beforeEach(done => {
            setTimeout(() => {
                target.searchUserByUsername('csd0')
                    .then(user => {
                        matchingUser = user

                        done()
                    })
                    .catch(done)
            }, 500)
        }
        )
        it('should get user on search', () => {
            expect(matchingUser).not.toBeUndefined()

            expect(matchingUser.public_repos > 0).toBeTruthy()
        })

    })


    describe('searchReposByUsername', () => {
        let matchingRepos

        beforeEach(done => {
            setTimeout(() => {
                target.searchReposByUsername('csd0')
                    .then(repos => {
                        matchingRepos = repos

                        done()
                    })
                    .catch(done)
            }, 500)
        }
        )
        it('should get repos on search', () => {
            expect(matchingRepos).not.toBeUndefined()

            expect(matchingRepos.length > 0).toBeTruthy()
        })

    })

    // next 2 tests expect no results
    describe('searchUserByUsername', () => {
        let matchingUser

        beforeEach(done => {
            setTimeout(() => {
                target.searchUserByUsername('zzzzzzsssssss')
                    .then(user => {
                        matchingUser = user

                        done()
                    })
                    .catch(done)
            }, 500)
        }
        )
        it('should not get user on search', () => {
            expect(matchingUser.message === 'Not Found').toBeTruthy()
        })

    })


    describe('searchReposByUsername', () => {
        let matchingRepos

        beforeEach(done => {
            setTimeout(() => {
                target.searchReposByUsername('zzzzzzsssssss')
                    .then(repos => {
                        matchingRepos = repos

                        done()
                    })
                    .catch(done)
            }, 500)
        }
        )
        it('should not get repos on search', () => {
            expect(matchingRepos.message === 'Not Found').toBeTruthy()
        })

    })

})