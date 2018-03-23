require 'rails_helper'

describe "Todos management", type: :request do
  let(:user) { create(:user) }
  let(:auth_headers) { get_auth_headers(user) }

  describe 'GET /todos' do
    it "returns a list of the user's incomplete todos" do
      todo = create(:todo, completed: false, user: user)
      get '/todos', headers: auth_headers
      expect(todos(response).map(&:id).include? todo.id).to be true
    end

    it "does not return other users' todos" do
      other_todo = create(:todo, user: create(:user), completed: false)
      get '/todos', headers: auth_headers
      expect(todos(response).map(&:id).include? other_todo.id).to be false
    end

    it "does not return completed todos" do
      todo = create(:todo, completed: true, user: user)
      get '/todos', headers: auth_headers
      expect(todos(response).map(&:id).include? todo.id).to be false
    end
  end

  describe 'POST /todos' do
    it "returns the todo with an ID if the todo was saved" do
      post '/todos', headers: auth_headers, params: { todo: { description: 'test'} }.to_json
      expect(JSON.parse(response.body)['todo']).not_to be nil
    end

    it "returns the errors hash if the todo failed to save" do
      post '/todos', headers: auth_headers, params: { todo: { completed: false } }.to_json
      expect(JSON.parse(response.body)['errors']).not_to be nil
    end
  end

  describe "PATCH /todos/:id" do
    it "returns the updated todo if the todo was saved" do
      todo = create(:todo, description: 'test', user: user)
      patch "/todos/#{todo.id}", headers: auth_headers, params: { todo: { description: "test 2" } }.to_json
      expect(JSON.parse(response.body)['todo']['description']).to eq "test 2"
    end

    it "returns 404 if the todo is not found" do
      patch "/todos/-1", headers: auth_headers, params: { todo: { description: "test 2" } }.to_json
      expect(response.status).to eq 404
    end
  end
end