class Api::PostsController < ApplicationController
  def index
    @posts = [];
    current_user.followees.each do |followee|
      followee.posts.each do |post|
        @posts.push(post)
      end
    end
    @posts.concat(current_user.posts)
    # @posts = Post.all.order('created_at DESC')
    # @filtered_posts = []
    #
    #   current_user.followees.each do |followee|
    #     followee.posts.each do |post|
    #       @filtered_posts.push(post)
    #     end
    #   end
    #
    # @filtered_posts = @filtered_posts.all.order('created_at DESC')
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: ["Please include a caption for your photo."], status: 422
    end
  end

  # def show
  #   @post = Post.find(params[:id])
  #   render :show
  # end

  private

  def post_params
    params.require(:post).permit(:user_id, :image_url, :caption)
  end

  # def count
  # end
end


### take in a user_id or whatever soething liek that
### such that you can know which posts you want to filter by
