namespace :jwt_token do
  task :setup do
    require 'securerandom'
    `echo 'export DEVISE_JWT_SECRET="#{SecureRandom.hex(64)}"' >> ~/.bash_profile`
  end
end