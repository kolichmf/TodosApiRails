require 'rails_helper'

describe "JWT sign up", type: :request do
  let(:user) { build(:user) }

  it 'should return a token if the registration is valid' do
    post '/users', params:
        { user: { email: user.email, password: user.password, password_confirmation: user.password_confirmation } }
    expect(response.headers['Authorization']).not_to be nil
    expect(response.headers['Authorization'].include? 'Bearer').to be true
  end
end