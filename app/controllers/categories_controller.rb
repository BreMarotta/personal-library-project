class CategoriesController < ApplicationController
    skip_before_action :authorize, only: :index
    def index      
        categories = Category.all.sort_order  
        render json: categories
    end

    def show
        list = @current_user.category_list
        byebug
    end

    def create 
        new_category = Category.create!(category_params)
        render json: new_category, status: :created
    end

    private 

    def category_params
        params.permit(:category, :name)
    end
end
