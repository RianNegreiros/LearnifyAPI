FactoryBot.define do
  factory :coupon do
    code { Faker::Commerce.promotion_code(digits: 5) }
    status { %i(active inactive).sample }
    discount_value { Faker::Number.within(range: 1..99) }
    due_date { "2023-03-28 17:52:23" }
  end
end
