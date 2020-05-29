Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root 'events#index'
  resources :events
end
