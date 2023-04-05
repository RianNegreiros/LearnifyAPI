if Rails.env.development? || Rails.env.test?
  require 'factory_bot'

  namespace :dev do
    desc 'Sample data'
    task prime: 'db:setup' do
      include FactoryBot::Syntax::Methods

      15.times do
        profile = [:admin, :client].sample
        create(:user, profile: profile)
      end

      system_requirements = []
      ['Basic', 'Medium', 'Advanced'].each do |name|
        system_requirements << create(:system_requirement, name: name)
      end

      15.times do
        coupon_status = [:active, :inactive].sample
        create(:coupon, status: coupon_status)
      end

      categories = []
      25.times do
        categories << create(:category, name: Faker::Game.unique.genre)
      end

      30.times do
        game_name = Faker::Game.unique.title
        availability = [:available, :unavailable].sample
        categories_count = rand(0..3)
        game_categories_ids = []
        categories_count.times { game_categories_ids << categories.sample.id }
        game = create(:game, system_requirement: system_requirements.sample)
        create(:product, name: game_name, status: availability, category_ids: game_categories_ids, productable: game)
      end
    end
  end
end