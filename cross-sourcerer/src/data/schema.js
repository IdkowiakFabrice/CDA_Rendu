import {gql} from '@apollo/client'
console.log(process.env)

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
      company
      url
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 100, orderBy: {field: PUSHED_AT, direction: DESC}) {
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
