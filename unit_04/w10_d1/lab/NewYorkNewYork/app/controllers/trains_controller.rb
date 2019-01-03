class TrainsController < ApplicationController
  # INDEX
  get "/" do
    trains = Train.all
    trains.to_json
  end

  # SHOW
  get "/:id" do
    train = Train.find(params[:id])
    train.to_json
  end
  
  # CREATE
  post "/" do
    new_train = Train.create(params[:train])
    new_train.to_json
  end

  # UPDATE
  patch "/:id" do
    train = Train.find(params[:id])
    train.update(params[:train])
    train.to_json
  end

  # DESTROY
  delete "/:id" do
    Train.delete(params[:id])
    status 204
  end
end
