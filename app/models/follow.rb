class Follow < ActiveRecord::Base
  validates :followee_id, :follower_id, presence: true
  validates :follower, uniqueness: { scope: :followee }

  belongs_to :followee,
    class_name: :User

  belongs_to :follower,
    class_name: :User
end
