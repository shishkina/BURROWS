class ItemsController < ApplicationController
  before_action :get_item, only: [:show, :edit, :update, :destroy]

  def index
    @items = Item.all
  end

  def show
  end

  def new
    @item = Item.new
  end

  def create
    item = Item.new(item_params)
    if item.save
      redirect_to item
    else
      redirect_to new_item_path
    end
  end

  def edit
  end

  def update
    if @item.update(item_params)
      redirect_to @item
    else
      redirect_to edit_item_path(@item)
    end
  end

  def destroy
    if @item.destroy
      redirect_to items_path
    end
  end

  private

  def item_params
    params.require(:item).permit(:description, :completed)
  end

  def get_item
    @item ||= Item.find(params[:id])
  end
end
