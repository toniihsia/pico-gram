class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    debugger
    @follow.follower_id = current_user.id

    if @follow.save
      # @followee = User.find(follow_params[:followee_id])
      # @follower = current_user
      @post =
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(followee_id: params[:id], follower_id: current_user.id)
    if @follow.destroy
      # @followee = User.find(follow_params[:followee_id])
      # @follower = current_user
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
