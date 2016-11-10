class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(followee_id: params[:followee_id])
    @follow.follower_id = current_user.id

    if @follow.save
      @followee = User.find(params[:followee_id])
      @follower = current_user
      render "api/posts/show"
    end
  end

  def destroy
    @follow = Follow.find_by(followee_id: params[:followee_id])
    if @follow.destroy
      @followee = User.find(params[:followee_id])
      @follower = current_user
      render "api/posts/show"
    end
  end
end
