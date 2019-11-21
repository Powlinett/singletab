Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/visualisation', to: 'pages#visualisation'
  get '/data', to: 'pages#data'
  post '/auth', to: 'pages#auth'

  get 'folders/search', to: 'folders#search', as: 'search'

  resources :folders, only: [:index, :show, :destroy]
  resources :tabs, only: [:edit, :create, :show, :destroy]

  root to: "folders#index"
end
