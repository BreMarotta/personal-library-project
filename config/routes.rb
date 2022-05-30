Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  get '/most-books', to: 'users#books'

  resources :books do
    resources :quotes, only: [:create, :update, :destroy]
  end

  resources :categories, only: [:create, :index, :show]

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
