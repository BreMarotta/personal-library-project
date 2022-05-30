class QuotesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        new_quote = current_book.quotes.create!(quote_params)
        render json: new_quote,  status: :created
    end

    def destroy
        q = current_book.quotes.find(params[:id])
        if q
            q.destroy
            head :no_content
        else
            render json: { error: "Quote not found"}, status: :not_found
        end
    end


    private
    def current_book
        @current_user.books.find_by(id: params[:book_id])
    end

    def quote_params
        params.require(:quote).permit(:text, :love, :book_id)
    end

    def render_not_found_response
        render json: { error: "Quote not found" }, status: :not_found
    end

end
