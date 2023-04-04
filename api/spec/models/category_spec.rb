require 'rails_helper'

RSpec.describe Category, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name).case_insensitive }

  it { should have_many(:product_categories).dependent(:destroy) }
  it { should have_many(:products).through(:product_categories) }

  it_behaves_like "like searchable concern", :category, :name
  it_behaves_like "paginatable concern", :category
end
