Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :folders, only: [:index]
  resources :tabs, only: [:edit]
  root to: "folders#index"
end
