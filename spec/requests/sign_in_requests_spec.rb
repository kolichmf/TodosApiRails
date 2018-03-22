require 'rails_helper'

describe "JWT sign in", type: :request do
  let(:user) { create(:user) }

  it 'should return a token if the sign in is valid' do
    post '/users/sign_in', params: { user: { email: user.email, password: user.password } }
    expect(response.headers['Authorization']).not_to be nil
    expect(response.headers['Authorization'].include? 'Bearer').to be true
  end
end