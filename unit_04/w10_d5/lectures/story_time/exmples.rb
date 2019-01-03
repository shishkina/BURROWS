# Underpants and their loving owners:  One-To-Many

# bin/rails g model LovingOwner name:string
class LovingOwner < ActiveRecord::Base
  has_many :underpants
end

# bin/rails g model Underpant color:string is_clean:boolean loving_owner:belongs_to
class Underpant < ActiveRecord::Base
  belongs_to :loving_owner
end

# -------------------------------

# Meerkats & BurrowLocations:  Many-To-Many

# bin/rails g model Meerkat name:string
class Meerkat < ActiveRecord::Base
  has_many :burrow_visits
  has_many :burrow_locations, through: :burrow_visits
end

# bin/rails g model BurrowVisit meerkat:belongs_to burrow_location:belongs_to
class BurrowVisit < ActiveRecord::Base
  belongs_to :meerkat
  belongs_to :burrow_location
end

# bin/rails g model BurrowLocation lat:integer long:integer
class BurrowLocation < ActiveRecord::Base
  has_many :burrow_visits
  has_many :meerkats, through: :burrow_visits
end

# -------------------------------
