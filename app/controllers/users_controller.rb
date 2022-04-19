class UsersController < ApplicationController
   
    skip_before_action :authorize, only: :create
    # sign up


    # keep user signed in (get current user)
    def show
        byebug
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end
end
