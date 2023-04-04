require 'rails_helper'

RSpec.describe License, type: :model do
  subject { build(:license) }

  it { should belong_to(:game) }
  
  it { should validate_presence_of(:key) }
  it { should validate_uniqueness_of(:key).case_insensitive.scoped_to(:platform) }

  it { should validate_presence_of(:platform) }
  it { should define_enum_for(:platform).with_values([:steam, :origin, :battle_net, :xbox, :playstation]) }

  it { should validate_presence_of(:status) }
  it { should define_enum_for(:status).with_values([:available, :in_use, :inactive]) }

  it_behaves_like "paginatable concern", :license
  it_behaves_like "like searchable concern", :license, :key
end
