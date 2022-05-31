class BooksController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # def index 
    #     books = @current_user.books.sort_order
    #     render json: books
    # end

    # .to_json(only: [:id, :title, :author, :rating], include: [category: { only: [:id, :name]}])

    # , serializer: BookIndexSerializer
    # .to_json(only: [:id, :title, :author, :rating], include: [:category] )

    def show 
        book = @current_user.books.find(params[:id])
        render json: book
    end

    def create 
        new_book = @current_user.books.create!(book_params)
        render json: new_book, status: :created
    end

    def update 
        book = @current_user.books.find(params[:id])
        book.update(book_params)
        if book.valid?
        render json: book, status: :accepted
        else
            render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
        end     
    end

    def destroy
        book = @current_user.books.find(params[:id])
        book.destroy
        head :no_content
    end

    private
    def book_params
        params.require(:book).permit(:id, :title, :author, :rating, :favorite_quote, :lent, :category_id)
    end

    def render_not_found_response
        render json: { error: "Book not found" }, status: :not_found
    end

end
