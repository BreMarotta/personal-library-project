class UsersController < ApplicationController
   
    skip_before_action :authorize, only: :create
    # sign up
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # keep user signed in (get current user)
    def show
        render json: @current_user
    end

    private

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end
end
