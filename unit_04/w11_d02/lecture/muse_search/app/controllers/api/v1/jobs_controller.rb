class Api::V1::JobsController < ApplicationController
  def index
    @jobs = Muse::Jobs.call()
    render json: @jobs
  end

  private

  def search_params
    params.permit(
        :page,
        :category,
        :location,
        :level,
        :company,
        :descending
      )
      .merge(page: page)
  end

  def page
    params[:page] || 0
  end
end
