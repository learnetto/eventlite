class Event < ApplicationRecord
  validates_presence_of :title, :start_datetime, :location
  validates :title, length: {minimum: 3}
  validate :start_datetime_cannot_be_in_the_past

  belongs_to :user

  private
  def start_datetime_cannot_be_in_the_past
    if start_datetime.present? && start_datetime < Time.now
      errors.add(:start_datetime, "can't be in the past")
    end
  end
end
