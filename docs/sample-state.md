{
  currentUser: {
    id: 1,
    username: "toniahsia",
    follows: {
      1: {
        user_id: 2,
        username: "zerothecat"
      }
    },
    followers: {
      1: {
        user_id: 2,
        username: "zerothecat"
      }
    }
    likes: {
      1: {
        post_id: 1
      }
    }
  },

  forms: {
    signUp : { errors: [] },
    logIn: { errors: [] },
    createPost: { errors: ["You must choose a photo to upload."]}
  },

  photos: {
    1: {
      image_url: 'https://i.ytimg.com/vi/B7xrGE8GHD4/maxresdefault.jpg'
      caption: 'beautiful day',
      user_id: 1,
      tags: {
        1: {
          id: 1,
          name: "nature"
        }
      },
      likes: {
        1: {
          user_id: 1
        }
      }
    }
  },


}
