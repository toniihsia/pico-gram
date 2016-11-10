class AddUniqueIndexFollows < ActiveRecord::Migration
  def change
    add_index :follows, [:followee_id, :follower_id], unique: true
  end
end
