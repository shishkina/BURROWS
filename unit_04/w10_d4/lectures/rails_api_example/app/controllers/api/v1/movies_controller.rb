class Api::V1::MoviesController < ApplicationController
  def index
    @movies = OMDB.search_by_title(params[:title])["Search"].pluck("Title")
    render json: @movies, status: :success
  end
end
