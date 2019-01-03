require "bundler"
Bundler.require

require "./app/models/train"
require "./app/controllers/application_controller"
require "./app/controllers/trains_controller"
require "./app/controllers/welcome_controller"

map("/api/trains") { run TrainsController }
map("/") { run WelcomeController }
