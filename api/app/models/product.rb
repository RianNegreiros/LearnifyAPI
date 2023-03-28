class Product < ApplicationRecord
  belongs_to :productable, polymorphic: true
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
end
