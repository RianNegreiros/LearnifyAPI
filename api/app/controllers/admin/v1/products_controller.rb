module Admin::V1
  class ProductsController < ApiController
    before_action :load_product, only: %i(update destroy)

    def index
      @products = Product.all
    end

    def create
      @product = Product.new
      @product.attributes = product_params
      save_product!
    end

    def update
      @product.attributes = product_params
      save_product!
    end

    def destroy
      @product.destroy!
    rescue
      render_error(fields: @product.errors.messages)
    end

    private

    def load_product
      @product = Product.find(params[:id])
    end

    def product_params
      return {} unless params.has_key?(:product)
      params.require(:product).permit(:id, :name, :description, :price, :productable)
    end

    def save_product!
      @product.save!
      render :show
    rescue
      render_error(fields: @product.errors.messages)
    end
  end
end