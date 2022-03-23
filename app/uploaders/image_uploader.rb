require 'image_processing/mini_magick'

class ImageUploader < Shrine
  Attacher.validate do
    validate_mime_type %w[image/jpeg image/png image/webp]
    validate_max_size 8 * 1024 * 1024
  end

  Attacher.derivatives do |original|
    magick = ImageProcessing::MiniMagick.source(original)
    {
      large: magick.resize_to_limit!(1600, 1200),
      medium: magick.resize_to_limit!(800, 600),
      small: magick.resize_to_limit!(400, 300),
    }
  end
end
