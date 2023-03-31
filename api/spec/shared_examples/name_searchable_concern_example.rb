shared_examples "name searchable concern" do |factory_name|
  let!(:search_params) { "Example" }
  let!(:records_to_find) do
    (0..3).to_a.map { |index| create(factory_name, name: "Example #{index}") }
  end
  let!(:records_to_ignore) { create_list(factory_name, 3) }

  it "returns only the records matching" do
    found_records = described_class.search_by_name(search_params)
    expect(found_records.to_a).to contain_exactly(*records_to_find)
  end

  it "does not return records that do not match" do
    found_records = described_class.search_by_name(search_params)
    expect(found_records.to_a).to_not include(*records_to_ignore)
  end
end