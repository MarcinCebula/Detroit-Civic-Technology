Rails.application.routes.draw do
  mount RailsEmailPreview::Engine, at: 'emails'
  mount RailsAdmin::Engine => '/my_admin', as: 'rails_admin'

  get 'pages/main'
  get 'data_imports/all'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'pages#main'

end
