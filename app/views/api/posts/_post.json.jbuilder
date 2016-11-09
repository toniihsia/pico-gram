json.extract! post, :id, :user_id, :image_url, :caption
json.age post.age
json.user do
  json.username post.user.username
end
