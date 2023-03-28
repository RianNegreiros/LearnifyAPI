FactoryBot.define do
  factory :game do
    mode { %i(pvp pve both).sample }
    release_date { "2023-03-28 17:08:02" }
    developer { Faker::Company.name }
    publisher { Faker::Company.name }
    system_requirement
  end
end
