### Build a story rails api!

rails new story_time --api -T -d postgresql
cd story_time
bin/rails g model Story title:string body:string
rake db:create
bin/rake db:migrate
bin/rails g controller API::V1::Stories

- Added to routes.rb
```
namespace :api do
  namespace :v1 do
    resources :stories, only: [:create, :index]
  end
end
```

bin/rake routes  # <-to check

- Added to Api::V1::StoriesController
```
def index
  stories = Story.all
  render json: stories
end

def create
  story = Story.new(story_params)
  if story.save
    render json: story, status: :create
  else
    render json: story.errors, status: :unprocessable_entity
  end
end

private

def story_params
  params.require(:story).permit(:title, :body)
end
```

---

Create a table which joins stories and characters... we'll call it appearances
```
bin/rails g model Appearance character:belongs_to story:belongs_to is_good:boolean
```
