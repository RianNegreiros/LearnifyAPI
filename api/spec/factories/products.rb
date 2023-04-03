FactoryBot.define do
  factory :product do
    sequence(:name) { |n| "Product #{n}" }
    description { Faker::Lorem.paragraph }
    price { Faker::Commerce.price(range: 1.0..999.0) }
    image { Rack::Test::UploadedFile.new(Rails.root.join('spec', 'support', 'assets', 'product_image.png'), 'image/png') }
    status { :available }

    after :build do |product|
      product.productable = create(:game)
    end
  end
end
