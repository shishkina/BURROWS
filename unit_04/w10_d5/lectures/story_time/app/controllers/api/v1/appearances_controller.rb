class Api::V1::AppearancesController < ApplicationController
  def create
    appearance = Appearance.new(appearance_params)
    if appearance.save
      render json: appearance, status: :created
    else
      render json: appearance.errors, status: :unprocessable_entity
    end
  end

  private

  def appearance_params
    params.require(:appearance).permit(:character_id, :story_id, :is_good)
  end
end
