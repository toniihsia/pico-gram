class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  has_many :posts
  has_many :comments
  has_many :likes

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_many :incoming_follows,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :outgoing_follows,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followers,
    through: :incoming_follows,
    source: :follower

  has_many :followees,
    through: :outgoing_follows,
    source: :followee

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    b_object = BCrypt::Password.new(self.password_digest)
    b_object.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end


  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
