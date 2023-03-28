FactoryBot.define do
  factory :system_requirement do
    sequence(:name) { |n| "System #{n}" }
    operational_system { Faker::Computer.platform }
    storage { Faker::Number.between(from: 1, to: 3) }
    processor { "AMD, Intel" }
    memory { Faker::Number.within(range: 1..16) }
    video_board { "AMD, NVDIA" }
  end
end
