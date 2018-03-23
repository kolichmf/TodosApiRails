class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to :json

  rescue_from ActiveRecord::RecordNotFound, with: :render_404
  def render_404
    render body: nil, status: 404
  end
end
