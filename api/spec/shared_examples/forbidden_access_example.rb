shared_examples "forbidden access" do
  it "returns forbidden error" do
    expect(body_json['errors']['message']).to eq "Forbidden access"
  end

  it "returns forbidden status" do
    expect(response).to have_http_status(:forbidden)
  end
end