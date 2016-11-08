include ActionView::Helpers::DateHelper

class Post < ActiveRecord::Base
  validates :user_id, :image_url, :caption, presence: true


  def age
    return time_ago_in_words(created_at)
  end

  belongs_to :user
  has_many :comments
  # has_many :likes
end
