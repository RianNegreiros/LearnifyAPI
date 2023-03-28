require 'rails_helper'

RSpec.describe Game, type: :model do
  it { should validate_presence_of(:mode) }
  it { should validate_presence_of(:release_date)}
  it { should validate_presence_of(:developer)}
  it { should validate_presence_of(:publisher)}
  it { should belong_to(:system_requirement) }
  it { should define_enum_for(:mode).with_values({ pvp: 1, pve: 2, both: 3 }) }
  it { should have_one(:product) }
end
