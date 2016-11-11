json.extract! user, :username, :id

json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.extract! follower, :id
    end
  end
end

json.followees do
  user.followees.each do |followee|
    json.set! followee.id do
      json.extract! followee, :id
    end
  end
end

# enduser.followees
# json.followees user.followees
#
# # json.posts do
# #   user.posts.each do |post|
# #     json.set! post.id do
# #       json.partial! 'api/posts/show', post: post
# #     end
# #   end
# # end
