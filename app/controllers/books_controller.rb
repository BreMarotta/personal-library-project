class BooksController < ApplicationController
    before_action :authorize

    def index 
        books = current_user.books
        render json: books
    end

    def show 
        book = current_user.books.find_by(id: params[:id])
        if book
            render json: book
        else  
            render json: { error: "Book not found"}, status: :not_found
        end
    end

    def create 
        new_book = current_user.books.create(book_params)
        if new_book.valid?
            render json: new_book, status: :created
        else 
            render json: { errors: new_book.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update 
        book = current_user.books.find_by(id: params[:id])
        if book
            book.update(book_params)
            render json: book, status: :accepted
        else  
            render json: { error: "Book not found"}, status: :not_found
        end     
    end

    def destroy

    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def book_params
        params.require(:book).permit(:id, :title, :author, :personal_rating, :favorite_quote, :lent_to)
    end
 
    def authorize 
        render json: { errors: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
