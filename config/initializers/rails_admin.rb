RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  config.model 'Story' do
    edit do
      field :header
      field :photo
      field :small_photo
      field :date
      field :short_body
      field :body, :froala
    end
  end
  config.model 'NewsArticle' do
    edit do
      field :header
      field :photo
      field :date
      field :short_body
      field :body, :froala
    end
  end
  config.model 'Feature' do
    edit do
      field :header
      field :photo
      field :date
      field :short_body
      field :body, :froala
    end
  end
  config.model 'AboutUs' do
    edit do
      field :photo
      field :header
      field :short_body, :froala
      field :body, :froala
    end
  end
  config.model 'Tweet' do
    edit do
      field :message
      field :date
    end
  end
  config.model 'Resident' do
    edit do
      field :name
      field :bio
      field :photo
      field :date
    end
  end
  config.model 'Video' do
    edit do
      field :youtube_url
      field :date
    end
  end
  config.model 'Contact' do
    edit do
      field :google_maps_embed_url
      field :bio, :froala
      field :address
      field :phone_number
      field :cell_number
      field :fax_number
      field :email
    end
  end
  config.model 'Message' do
    edit do
      field :name
      field :email
      field :phone_number
      field :body, :froala
    end
  end
  config.model 'Terms' do
    field :privacy_policy, :froala
    field :terms_of_use, :froala
  end
end
