# json.posts do
#   json.partial! "api/posts/profile", posts: @user.posts
# end

json.userProfile do
  json.id @user.id
  json.username @user.username
  json.profile_pic @user.image_url
  json.posts do
    json.partial! "api/posts/profile", posts: @user.posts
  end
end
