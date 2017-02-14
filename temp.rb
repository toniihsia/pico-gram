# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# #
# # Examples:
# #
# #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# #   Mayor.create(name: 'Emanuel', city: cities.first)
#
#
#
# #### USER 1 ####
# guest = User.create(username: "Guest", password: "password", email: "email@email.com")
# follow_1 = Follow.create(followee_id: 3, follower_id: 1)
# follow_2 = Follow.create(followee_id: 5, follower_id: 1)
# follow_3 = Follow.create(followee_id: 8, follower_id: 1)
# follow_4 = Follow.create(followee_id: 9, follower_id: 1)
# follow_5 = Follow.create(followee_id: 10, follower_id: 1)
# follow_6 = Follow.create(followee_id: 14, follower_id: 1)
#
# #### USER 2 ####
# michael = User.create(username: "aelho_pak", password: "password", email: "michael@email.com")
# photo_8 = Post.create(image_url: 'http://res.cloudinary.com/dfrrpfeus/image/upload/v1478893617/seed_photo_06_ut6zbl.jpg', caption: 'silver brush', user_id: 2)
#
# #### USER 3 ####
# benjamin = User.create(username: "quarks0", password: "2malfor9", email: "benjamin@email.com")
#
# photo_1 = Post.create(image_url: "https://res.cloudinary.com/dfrrpfeus/image/upload/v1478216466/seed_photo_1_k3agfk.jpg", caption: "pool lighting at dusk", user_id: 3)
# comment1 = Comment.create(user_id: 1, post_id: 1, body: "hey, this is a really cool photo!")
# like1 = Like.create(user_id: 2, post_id: 1)
# like2 = Like.create(user_id: 3, post_id: 1)
# like3 = Like.create(user_id: 4, post_id: 1)
# comment_11 = Comment.create(user_id: 8, post_id: 2, body: 'how did you get the colors to turn out like that?')
#
#
#
# #### USER 4 ####
# connor = User.create(username: "monnorcurphy", password: "password", email: "connor@email.com")
#
# #### USER 5 ####
# lawrence = User.create(username: "lawrence_c", password: "password", email: "lawrence@email.com")
# photo_2 = Post.create(image_url: "https://res.cloudinary.com/dfrrpfeus/image/upload/v1478380772/seed_photo_07_gknun8.jpg", caption: "chinese typography project", user_id: 5)
# # comment2 = Comment.create(user_id: 4, post_id: 2, body: "i didn't know you knew how to write chinese")
#
# photo_4 = Post.create(image_url: "https://res.cloudinary.com/dfrrpfeus/image/upload/v1478380750/seed_photo_04_zg6btw.jpg", caption: "red chinese typography", user_id: 5)
# comment4 = Comment.create(user_id: 2, post_id: 4, body: "more typography?")
# #### USER 6 ####
# zero = User.create(username: "aldnoah_zero", password: "password", email: "zero@email.com")
#
# #### USER 7 ####
# michelle = User.create(username: "michelle_l", password: "password", email: "michelle@email.com" )
#
# #### USER 8 ####
# matt = User.create(username: "velker88", password: "password", email: "mattvelker@email.com" )
# photo_3 = Post.create(image_url: "https://res.cloudinary.com/dfrrpfeus/image/upload/v1478380771/seed_photo_08_lsl9wg.jpg", caption: "ARTIFICIAL branding project", user_id: 8)
# comment3 = Comment.create(user_id: 7, post_id: 3, body: "why so fake?")
#
# photo_5 = Post.create(image_url: 'https://res.cloudinary.com/dfrrpfeus/image/upload/v1478893612/seed_photo_2_zh74zw.jpg', caption: 'azure tonic water labeling', user_id: 8)
# comment_10 = Comment.create(user_id: 2, post_id: 5, body: 'these bottles are super cute; i want one')
#
# #### USER 9 ####
# sandman = User.create(username: "the_sandman", password: "password", email: "sandman@email.com" )
# photo_6 = Post.create(image_url: 'https://res.cloudinary.com/dfrrpfeus/image/upload/v1478893612/seed_photo_03_tlzbbc.jpg', caption: 'working on some magazine layouts; thoughts?', user_id: 9)
#
# #### USER 10 ####
# albert = User.create(username: "albert", password: "password", email: "albert@email.com" )
# photo_10 = Post.create(image_url: 'http://res.cloudinary.com/dfrrpfeus/image/upload/v1478893670/seed_photo_10_lq0fgh.png', caption: 'texture exploration', user_id: 10)
# comment_8 = Comment.create(user_id: 5, post_id: 10, body: 'interesting clash; where were you when you took these photos?')
# comment_9 = Comment.create(user_id: 3, post_id: 10, body: 'wow! what is the cultural significance of their clothing?')
#
# photo_11 = Post.create(image_url: 'http://res.cloudinary.com/dfrrpfeus/image/upload/v1478893673/seed_photo_11_kxbirz.png', caption: 'man in cultural dress with flowers', user_id: 10)
# comment_6 = Comment.create(user_id: 9, post_id: 11, body: 'where is this?')
#
# #### USER 11 ####
# henry = User.create(username: "nomzly", password: "password", email: "henry@email.com" )
# photo_7 = Post.create(image_url: 'https://res.cloudinary.com/dfrrpfeus/image/upload/v1478893609/seed_photo_05_dclqg4.png', caption: "cute little bear icons i've been working on", user_id: 11)
# comment_7 = Comment.create(user_id: 7, post_id: 7, body: 'is this for an app? great job!')
#
# #### USER 12 ####
# jaimie = User.create(username: "jamallama", password: "password", email: "jaimie@email.com" )
#
# #### USER 13 ####
# max = User.create(username: "maximillian", password: "password", email: "max@email.com" )
#
# #### USER 14 ####
# shaurya = User.create(username: "steelbunz", password: "password", email: "shaurya@email.com" )
# photo_9 = Post.create(image_url: 'https://res.cloudinary.com/dfrrpfeus/image/upload/v1478893613/seed_photo_09_wixvlw.jpg' , caption: 'float', user_id: 14)
# comment_5 = Comment.create(user_id: 12, post_id: 9, body: 'the sky looks crazy here')
#
# #### USER 15 ####
# michelle = User.create(username: "michelle_l", password: "password", email: "michelle@email.com" )
#
# #### USER 16 ####
# michelle = User.create(username: "michelle_l", password: "password", email: "michelle@email.com" )
