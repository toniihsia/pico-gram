class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :image_url, null: false, default: 'https://pixabay.com/static/uploads/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

      t.timestamps null: false
    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
