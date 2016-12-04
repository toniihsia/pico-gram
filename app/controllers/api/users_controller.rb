class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user.nil?
      render json: @user.errors.full_messages, status: 404
    else
      render "api/users/profile", status: 200
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
