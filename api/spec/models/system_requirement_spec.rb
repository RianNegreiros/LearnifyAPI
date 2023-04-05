require 'rails_helper'

RSpec.describe SystemRequirement, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name).case_insensitive }
  it { should validate_presence_of(:operational_system) }
  it { should validate_presence_of(:storage) }
  it { should validate_presence_of(:processor) }
  it { should validate_presence_of(:memory) }
  it { should validate_presence_of(:video_board) }

  it { should have_many(:games).dependent(:restrict_with_error) }

  it_behaves_like "like searchable concern", :system_requirement, :name
  it_behaves_like "paginatable concern", :system_requirement
end