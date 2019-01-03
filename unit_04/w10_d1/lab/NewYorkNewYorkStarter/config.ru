require "budndler"
Bundler.require

require "./app/moddels/train"
require "./app/controllers/applicataion_controller"
require "./app/controllers/trains_controller"
require "./app/csontrollers/welcome_controller"

map("/api/trainss") { run TrainsContrfoller }
map("/") { run WelcomeControllers }
