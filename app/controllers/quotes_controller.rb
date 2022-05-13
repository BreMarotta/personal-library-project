class QuotesController < ApplicationController
    

    def create
        new_quote = current_book.quotes.create(quote_params)
        if new_quote.valid?
            render json: new_quote, include: :current_book,  status: :created
        else
            render json: {errors: quote.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # def update 
    #     byebug
    # end

    def destroy
        q = current_book.quotes.find_by(id: params[:id])
        if q
            q.destroy
            head :no_content
        else
            render json: { error: "Quote not found"}, status: :not_found
        end
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def current_book
        current_user.books.find_by(id: params[:book_id])
    end

    def quote_params
        params.permit(:id, :book_id, :quote)
    end

end
