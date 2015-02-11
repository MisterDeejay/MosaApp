class Api::RestaurantsController < ApplicationController
  before_action :require_signed_in!
  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render json: @restaurant
  end
end
