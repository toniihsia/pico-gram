## Sample State on Profile Page ##
{
  currentUser: {
    id: 1,
    username: "toniathehuman",
  },

  errors: {
    signUp : { errors: [] },
    logIn: { errors: [] },
    createPost: { errors: ["You must choose a photo to upload."]}
  },

  posts: {},

  profileUser: {
    id: 1,
    username: "toniathehuman",
    posts: {
      1: {
        image_url: 'https://i.ytimg.com/vi/B7xrGE8GHD4/maxresdefault.jpg'
        caption: 'beautiful day',
        tags: {
          1: {
            id: 1,
            name: "nature"
          }
        },
        likes: {
          1: {
            user_id: 1
            username: "toniathehuman",
          }
        }
      }
    }
  }
}

## Sample State on Feed ##
{
  session: {
    currentUser: {username: toniathehuman},
    userId: "1",
  },

  posts: {
    1: {
      user_id: 1
      username: "toniathehuman"
      image_url: 'https://i.ytimg.com/vi/B7xrGE8GHD4/maxresdefault.jpg'
      caption: 'beautiful day',
      tags: {
        1: {
          id: 1,
          name: "nature"
        }
      },
      likes: {
        1: {
          user_id: 1
          username: "toniathehuman",
        }
      }
    }
  },

  profileUser: {}
  }
}
