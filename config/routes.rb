Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/visualisation', to: 'pages#visualisation'
  get '/data', to: 'pages#data'

  get 'folders/search', to: 'folders#search', as: 'search'

  resources :folders, only: [:index, :show, :destroy]
  resources :tabs, only: [:edit, :create, :destroy]

  root to: "folders#index"
end
