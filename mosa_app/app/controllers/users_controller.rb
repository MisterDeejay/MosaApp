class UsersController < ApplicationController
  before_action :require_signed_out!
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :login)
  end
end
