class Character < ApplicationRecord
  has_many :appearances
  has_many :stories, through: :appearances
end
