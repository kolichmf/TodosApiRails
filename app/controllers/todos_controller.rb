class TodosController < ApplicationController
  before_action :authenticate_user!

  def index
    @todos = current_user.todos.incomplete
  end

  def create
    @todo = Todo.new(permitted_params.merge({ user_id: current_user.id }))

    if @todo.save
      render :show
    else
      render json: { errors: @todo.errors }
    end
  end

  def update
    @todo = current_user.todos.find(params[:id])

    if @todo.update_attributes(permitted_params)
      render :show
    else
      render json: { errors: @todo.errors }
    end
  end

  private

  def permitted_params
    params.require(:todo).permit(:description, :completed)
  end
end