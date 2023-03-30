shared_examples "unauthorized access" do
  it "returns unauthorized error" do
    expect(body_json['errors']['message']).to eq "Unauthorized access"
  end

  it "returns unauthorized status" do
    expect(response).to have_http_status(:unauthorized)
  end
end