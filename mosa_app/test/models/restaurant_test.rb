# == Schema Information
#
# Table name: restaurants
#
#  id                     :integer          not null, primary key
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  url                    :string           default("unavailable"), not null
#  mobile_url             :string           default("unavailable"), not null
#  display_phone          :string           default("unavailable"), not null
#  categories             :string           default("unavailable"), not null
#  name                   :string           default("unavailable"), not null
#  display_address        :string           default("unavailable"), not null
#  image_url              :string           default("unavailable"), not null
#  lat                    :float            default("0.0"), not null
#  lng                    :float            default("0.0"), not null
#  rating                 :float            default("0.0"), not null
#  neighborhoods          :string           default("unavailable"), not null
#  yelp_id                :string           default("unavailable"), not null
#  brunch_days            :string           default("unavailable"), not null
#  btm_price              :integer
#  rating_image_url       :string           default("unavailable")
#  rating_image_url_large :string           default("unavailable")
#  rating_image_url_small :string           default("unavailable")
#  btm_start_time         :time
#  btm_end_time           :time
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
