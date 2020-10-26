import {gql} from '@apollo/client'

const login = `"${process.env.REACT_APP_GITHUB_LOGIN.toString()}"`

export const infoUser = gql`
{
    user(login: ${login}) {
      name
      login
      email
      twitterUsername
      bioHTML
      location
      avatarUrl
      url
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 100) {
        nodes {
          name
          stargazerCount
          defaultBranchRef {
            target {
              ... on Commit {
                additions
                deletions
                history {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
  `
