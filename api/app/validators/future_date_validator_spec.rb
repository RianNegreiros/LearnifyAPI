require "rails_helper"

class validator
  include ActiveModel::Validations
  attr_accessor :date
  validates :date, future_date: true
end

describe FutureDateValidator do
  subject { validator.new }

  context "when date is before today" do
    before { subject.date = Date.yesterday }

    it "is invalid" do
      expect(subject).to be_invalid
    end

    it "adds error message" do
      expect(subject.errors[:date]).to include("must be in the future")
    end
  end

  context "when date is today" do
    before { subject.date = Date.today }

    it "is invalid" do
      expect(subject).to be_invalid
    end

    it "adds error message" do
      expect(subject.errors[:date]).to include("must be in the future")
    end
  end

  context "when date is after today" do
    before { subject.date = Date.tomorrow }

    it "is valid" do
      expeted(subject).to be_valid
    end
  end
end