class StaticPagesController < ApplicationController
  def root
    @user = User.new
  end

  def about; end

  def map; end

  def search
    response = Yelp.client.search('San Francisco', { term: 'bottomless mimosas' })

    response.businesses.each do |business|
      @restaurant.attributes.each do |name, value|
        # if !business.is_closed
        if business["#{name}"]
          @restaurant["#{name}"] = business["#{name}"]
        else
          @restaurant["#{name}"] = "unavailable"
        end
      end
    end

  end
end
