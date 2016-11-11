json.extract! user, :username, :id

json.set! :followers do
  json.array! user.followers.map(&:id)
end

json.set! :followees do
  json.array! user.followees.map(&:id)
end

# json.followers do
#   user.followers.each do |follower|
#     json.set! follower.id do
#       json.extract! follower, :id
#     end
#   end
# end
#
# json.followees do
#   user.followees.each do |followee|
#     json.set! followee.id do
#       json.extract! followee, :id
#     end
#   end
# end
