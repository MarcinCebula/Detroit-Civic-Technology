class PhotoUploader < CarrierWave::Uploader::Base
  include CarrierWave::RMagick
  include CarrierWave::ImageOptimizer

  storage :fog
  process :optimize

  def filename
    "#{secure_token}.#{file.extension}" if original_filename
  end

  def store_dir
    "images/"
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  protected
  def secure_token
    var = :"@#{mounted_as}_secure_token"
    model.instance_variable_get(var) or model.instance_variable_set(var, SecureRandom.uuid)
  end
end
