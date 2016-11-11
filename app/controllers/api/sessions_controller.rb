class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid login credentials"], status: 404
    end
  end

  def destroy
    if current_user
      # debugger
      logout
      render json: {}
    else
      render json: ["No current user!"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
