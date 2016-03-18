CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',                        # required
    :aws_access_key_id      => 'AKIAI3ZQJ2GPKROUYHPQ',                        # required
    :aws_secret_access_key  => '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'     # required
  }
  config.fog_directory  = 'pawslove-landing-page'                 # required
  config.fog_public     = true                                    # optional, defaults to true
  config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}  # optional, defaults to {}
end

if Rails.env.development?
  CarrierWave.configure do |config|
    config.storage = :fog
  end
end

if Rails.env.test?
  CarrierWave.configure do |config|
    config.storage = :file
    config.enable_processing = false
  end
end
