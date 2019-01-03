class User < ActiveRecord::Base
  has_many :posts

  validates_presence_of :first_name, :last_name, :email
  validates :email, uniqueness: true
  validates_format_of :email, with: /\w@/
  validates :age, numericality: true
end
