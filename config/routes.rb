Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  resources :books do
    resources :additional_quotes, only: [:create, :update, :destroy]
  end

  # resources :additional_quotes
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
