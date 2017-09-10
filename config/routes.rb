Rails.application.routes.draw do

  root 'pages#home'
  get 'pages/about', as: :about

end
