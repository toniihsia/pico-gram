class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    if @like.save
      @post = @like.post
      @user = @like.user

      render "api/posts/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])

    if @like.destroy
      @post = @like.post
      @user = @like.user
      render "api/posts/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
