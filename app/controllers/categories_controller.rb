class CategoriesController < ApplicationController

    def create 
        new_category = Category.create(category_params)
        if new_category.valid?
            render json: new_category, status: :created
        else
            render json: { errors: new_category.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private 

    def current_user
        User.find_by(id: session[:user_id])
    end

    def category_params
        params.permit(:category, :name)
    end
end
