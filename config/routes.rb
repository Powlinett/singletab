Rails.application.routes.draw do
  devise_for :users, controllers: { confirmations: 'confirmations' }

  # get '/visualisation', to: 'map#visualisation', as: 'visualisations'
  # get '/visualisation/:folder_id', to: 'map#visualisation', as: 'visualisation'

  # get 'visualisation/data_folder/:folder_id', to: 'map#data'
  # get '/data', to: 'map#data', as: 'data'

  post '/auth', to: 'pages#auth'
  get '/checkauth', to: 'pages#check_auth'
  get '/signout', to: 'pages#signout'

  get '/folders/folders_name', to: 'folders#send_folders_name'
  post 'tabs/assign_folder', to: 'tabs#assign_folder_to_tabs'
  get 'tabs/order-by-dates', to: 'tabs#index_by_date', as: 'filtered_by_date'

  get 'folders/search', to: 'folders#search', as: 'search'

  resources :folders, only: [:update, :index, :show, :destroy, :edit]
  resources :tabs, only: [:edit, :create, :destroy]
  resources :blacklisted_sites, only: [:index, :new, :create, :destroy]

  root to: "pages#landing"
end
