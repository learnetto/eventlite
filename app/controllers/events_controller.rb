class EventsController < ApplicationController
  def index
    @events = Event.order('start_datetime ASC')
    render json: @events
  end

  def show
    @event = Event.find(params[:id])
    render json: @event.as_json(except: :user_id, include: {user: {only: [:name, :nickname, :image]}})
                        .merge(currentUserCanEdit: @event.user.email == request.headers['uid'])
  end

  def create
    @event = current_user.events.new(event_params)
    if @event.save
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  def update
    @event = current_user.events.find(params[:id])
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @event = Event.find(params[:id])
    if @event.destroy
      head :no_content, status: :ok
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  private
  def event_params
    params.require(:event).permit(:title, :start_datetime, :location)
  end
end
