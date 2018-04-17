class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :side
      t.string :character
      t.timestamps
    end
  end
end
