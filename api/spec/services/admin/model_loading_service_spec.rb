require 'rails_helper'

describe Admin::ModelLoadingService do
  context "#call" do
    let!(:categories) { create_list(:category, 15) }

    context "when params are passed" do
      let!(:search_categories) do
        categories = []
        15.times { |i| categories << create(:category, name: "Search #{i + 1}") }
        categories
      end

      let(:params) do
        { search: { name: "Search" }, order: { name: :desc }, page: 2, length: 4 }
      end

      it "returns correct :length pagination" do
        service = described_class.new(Category.all, params)
        result_categories = service.call
        expect(result_categories.count).to eq 4
      end

      it "returns records with correct search, order and pagination" do
        search_categories.sort! { |a, b| b.name <=> a.name }
        service = described_class.new(Category.all, params)
        result_categories = service.call
        expected_categories = search_categories[4..7]
        expect(result_categories).to contain_exactly *expected_categories
      end
    end

    context "when params not are passed" do
      it "returns default pagination" do
        service = described_class.new(Category.all, nil)
        result_categories = service.call
        expect(result_categories.count).to eq 10
      end

      it "returns 10 records" do
        service = described_class.new(Category.all, nil)
        result_categories = service.call
        expected_categories = categories[0..9]
        expect(result_categories).to contain_exactly *expected_categories
      end
    end
  end
end