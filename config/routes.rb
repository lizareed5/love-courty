Rails.application.routes.draw do
  resources :ratings
  resources :reservations
  resources :courts, only: [:index, :show]
  resources :parks, only: [:index, :show]
  resources :users

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: "users#show"
  get '/top_rated', to: 'parks#top_rated'
end
