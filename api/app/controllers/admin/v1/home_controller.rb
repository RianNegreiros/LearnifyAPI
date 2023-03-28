module Admin::V1
  class HomeController < ApiController
    def index
      render json: { message: 'Admin V1' }
    end
  end
end