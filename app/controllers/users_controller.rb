class UsersController < ApplicationController
   
    skip_before_action :authorize, only: [:create, :books]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def show
        # byebug
        render json: @current_user
    end

    def books 
        most = User.most_books 
        render json: most.to_json(only: :username)
    end

    private

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end
end
