class CreatePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.string :title
      t.text :image_data # or :jsonb

      t.timestamps
    end
  end
end
