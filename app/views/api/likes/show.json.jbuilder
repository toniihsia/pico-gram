json.user do
  json.partial! 'api/users/user', user: @user
end

json.post do
  json.set! @post.id do
    json.partial! 'api/posts/show', post: @post
  end
end
