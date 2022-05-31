class CategoriesController < ApplicationController
    skip_before_action :authorize, only: :index
    def index      
        categories = Category.sort_order  
        render json: categories
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
