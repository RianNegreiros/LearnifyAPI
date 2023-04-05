FactoryBot.define do
  factory :license do
    key { Faker::Lorem.characters(number: 20) }
    platform { :steam }
    status { :available }
    game
  end
end
