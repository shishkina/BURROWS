class WelcomeController < ApplicationController
  set :public_folder, "./app/static"

  get "/" do
    send_file File.join(settings.public_folder, "index.html")
  end
end
