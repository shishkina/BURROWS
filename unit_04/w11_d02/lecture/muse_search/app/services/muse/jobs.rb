class Muse::Jobs < ApiService
  private

  BASE_URL = "https://api-v2.themuse.com/jobs?page=0&company=General%20Assembly".freeze

  def fetch
    @records = HTTParty.get(BASE_URL).body
  end

  def request_url
    BASE_URL + keys.merge(api_key: ENV["MUSE_API_KEY"]).to_query
  end
end
