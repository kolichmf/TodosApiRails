class Todo < ApplicationRecord
  belongs_to :user

  validates :description, presence: true

  scope :incomplete, -> { where completed: false }
end
