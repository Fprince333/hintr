# == Schema Information
#
# Table name: pictures
#
#  id         :integer          not null, primary key
#  url        :string(255)
#  hint_id    :integer
#  num_likes  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Picture < ActiveRecord::Base
  attr_accessible :url, :hint_id, :num_likes

  belongs_to :hint

end