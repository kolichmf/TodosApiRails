require 'rails_helper'

RSpec.describe Todo, type: :model do
  describe 'relationships' do
    it { should belong_to :user }
  end

  describe 'validations' do
    it { should validate_presence_of :description }
  end

  describe 'incomplete' do
    let(:completed_todo) { create(:todo, completed: true) }
    let(:incomplete_todo) { create(:todo, completed: false) }

    it 'should not return completed todos' do
      expect(Todo.incomplete.include? completed_todo).to be false
    end

    it 'should return incomplete todos' do
      expect(Todo.incomplete.include? incomplete_todo).to be true
    end
  end
end
