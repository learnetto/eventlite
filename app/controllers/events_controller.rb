class EventsController < ApplicationController
  def index
    @events = [
      {
        title: "London Retail Expo",
        datetime: "Mon, 14 Oct 2019",
        location: "London Excel Centre"
      },
      {
        title: "Enterprise Sales Training Workshop",
        datetime: "Tue, 15 Oct 2019",
        location: "Expert Sales Company Headquarters"
      },
      {
        title: "Ruby Hack Night",
        datetime: "Fri, 18 Oct 2019",
        location: "Learnetto Headquarters"
      },
      {
        title: "Beginners Salsa dance meetup",
        datetime: "Sat, 14 Oct 2019"
      }
    ]
  end
end
