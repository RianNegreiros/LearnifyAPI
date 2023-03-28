class SystemRequirement < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :operational_system, presence: true
  validates :storage, presence: true
  validates :processor, presence: true
  validates :memory, presence: true
  validates :video_board, presence: true
end
