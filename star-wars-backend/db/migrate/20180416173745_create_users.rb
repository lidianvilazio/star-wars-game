class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :side
      t.string :character
      t.integer :score
      t.timestamps
    end
  end
end
