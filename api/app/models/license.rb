class License < ApplicationRecord
  include Paginatable
  include LikeSearchable

  belongs_to :game

  validates :key, presence: true, uniqueness: { case_sensitive: false, scope: :platform }
  validates :platform, presence: true, inclusion: { in: %w(steam origin battle_net xbox playstation) }
  validates :status, presence: true, inclusion: { in: %w(available in_use inactive) }

  enum :platform, %w(steam origin battle_net xbox playstation)
  enum :status, %w(available in_use inactive)
end
