Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, :posts
      get "/movies/:title", to: "movies#index"
    end
  end
end
