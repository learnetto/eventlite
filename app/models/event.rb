class Event < ApplicationRecord
  validates_presence_of :title, :start_datetime, :location
end
