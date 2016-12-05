posts.each do |post|
  json.set! post.id do
    json.partial! 'api/posts/show', post: post
  end
end
