Rails.application.routes.draw do
  # namespace :api do
  #   get 'greetings/random'
  # end

  namespace :api do
    get 'random_greeting', to: 'greetings#random'
  end

  root 'static_pages#index'

end
