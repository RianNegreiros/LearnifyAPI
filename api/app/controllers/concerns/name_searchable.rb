module NameSearchable
  extend ActiveSupport::Concern

  included do
    scope :search_by_name, ->(name) { where('name LIKE ?', "%#{name}%") }
  end
end