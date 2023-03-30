module Admin::V1
  class ApiController < ApplicationController
    include Authenticable

    def render_errors(message: nil, fields: nil, status: :unprocessable_entity)
      errors = {}
      errors[:message] = message if message.present?
      errors[:fields] = fields if fields.present?
      render json: { errors: errors }, status: status
    end
  end
end
