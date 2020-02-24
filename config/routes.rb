Rails.application.routes.draw do
  devise_for :users, controllers: { confirmations: 'confirmations' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/visualisation', to: 'pages#visualisation', as: 'visualisations'
  get '/visualisationrond', to: 'pages#visualisationrond', as: 'visualisationsrond'
  get '/visualisation/:id', to: 'pages#visualisation', as: 'visualisation'
  get '/data', to: 'pages#data', as: 'data'
  get '/visualisation/data_id/:id', to: 'pages#data'
  post '/auth', to: 'pages#auth'
  get '/checkauth', to: 'pages#check_auth'
  get '/signout', to: 'pages#signout'
  get '/folders/folders_name', to: 'folders#send_folders_name'
  post 'tabs/assign_folder', to: 'tabs#assign_folder_to_tabs'

  get 'folders/search', to: 'folders#search', as: 'search'

  resources :folders #, only: [:update, :index, :show, :destroy, :edit, :create]
  resources :tabs, only: [:edit, :create, :destroy]

  root to: "pages#landing"
end
