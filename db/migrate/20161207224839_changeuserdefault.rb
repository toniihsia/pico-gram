class Changeuserdefault < ActiveRecord::Migration
  def change
    change_column_default(:users, :image_url, 'http://res.cloudinary.com/dfrrpfeus/image/upload/v1481151098/default-profile-01_affz2k.png')
    change_column_default(:posts, :caption, '')
  end
end
