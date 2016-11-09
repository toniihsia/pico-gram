include ActionView::Helpers::DateHelper

class Post < ActiveRecord::Base
  validates :user_id, :image_url, :caption, presence: true

  belongs_to :user
  has_many :comments
  has_many :likes

  has_many :user_likes,
    through: :likes,
    source: :user

  def age
    return time_ago_in_words(created_at)
  end

  def like_count
    return self.likes.count
  end
end
