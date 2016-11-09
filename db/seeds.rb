# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


guest = User.create(username: "Guest", password: "password", email: "email@email.com")


michael = User.create(username: "aelho_pak", password: "password", email: "michael@email.com")


benjamin = User.create(username: "quarks0", password: "2malfor9", email: "benjamin@email.com")


connor = User.create(username: "monnorcurphy", password: "password", email: "connor@email.com")


lawrence = User.create(username: "lawrence_c", password: "password", email: "lawrence@email.com")


zero = User.create(username: "aldnoah_zero", password: "password", email: "zero@email.com")


photo_1 = Post.create(image_url: "https://res.cloudinary.com/dfrrpfeus/image/upload/v1478216466/seed_photo_1_k3agfk.jpg", caption: "pool lighting at dusk", user_id: 5)
comment1 = Comment.create(user_id: 1, post_id: 1, body: "this is a comment wauwauwau")


photo_2 = Post.create(image_url: "https://res.cloudinary.com/dfrrpfeus/image/upload/v1478380772/seed_photo_07_gknun8.jpg", caption: "chinese typography project", user_id: 5)
comment2 = Comment.create(user_id: 1, post_id: 2, body: "this is a comment wauwauwau")

photo_3 = Post.create(image_url: "https://res.cloudinary.com/dfrrpfeus/image/upload/v1478380771/seed_photo_08_lsl9wg.jpg", caption: "ARTIFICIAL branding project", user_id: 1)
comment3 = Comment.create(user_id: 1, post_id: 3, body: "this is a comment wauwauwau")

photo_4 = Post.create(image_url: "https://res.cloudinary.com/dfrrpfeus/image/upload/v1478380750/seed_photo_04_zg6btw.jpg", caption: "red chinese typography", user_id: 3)
comment4 = Comment.create(user_id: 1, post_id: 4, body: "this is a comment wauwauwau")
