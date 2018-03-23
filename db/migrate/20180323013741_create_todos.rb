class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.integer :user_id
      t.string :description
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
