FactoryBot.define do
  factory :coupon do
    code { Faker::Commerce.promotion_code(digits: 5) }
    status { %i(active inactive).sample }
    discount_value { Faker::Number.within(range: 1..99) }
    due_date { Time.zone.today + Faker::Number.within(range: 1..30) }
  end
end
