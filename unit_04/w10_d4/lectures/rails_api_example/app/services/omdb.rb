class OMDB
  def self.search_by_title(title)
    HTTParty.get("http://www.omdbapi.com/?s=#{title}&y=&plot=short&r=json")
  end
end
