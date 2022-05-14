class CategoriesController < ApplicationController

    def index        
        render json: Category.all.sort_order
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

    def category_params
        params.permit(:category, :name)
    end
end
