require 'rails_helper'

describe 'Home', type: :request do
  let(:user) { create(:user) }

  it 'GET /admin/v1/home' do
    get admin_v1_home_path, headers: auth_header(user)

    expect(response).to have_http_status(:ok)
    expect(body_json).to eq({ 'message' => 'Admin V1' })
  end
end