class CategoriesController < ApplicationController
    before_action :authorize

    def index      
        categories = Category.all.sort_order  
        render json: categories.to_json(only: [:id, :name])
    end

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

    def authorize 
        render json: { errors: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
