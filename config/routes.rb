Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }
  resources :todos, except: [:new, :edit, :destroy]
end
