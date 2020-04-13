class Event < ApplicationRecord
  validates_presence_of :title, :start_datetime, :location
  validates :title, length: {minimum: 3}
end
