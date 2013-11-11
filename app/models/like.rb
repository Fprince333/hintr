# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  fb_id      :integer
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ActiveRecord::Base
  attr_accessible :fb_id, :name

  has_many :users, :through => :matches
  has_many :hints, :through => :matches

end