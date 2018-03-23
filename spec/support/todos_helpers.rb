module TodosHelper
  def todos(response)
    JSON.parse(response.body)['todos'].map { |todo| OpenStruct.new(todo) }
  end
end