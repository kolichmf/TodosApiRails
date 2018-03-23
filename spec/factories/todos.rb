FactoryBot.define do
  factory :todo do
    user { create(:user) }
    description "MyString"
    completed false
  end
end
