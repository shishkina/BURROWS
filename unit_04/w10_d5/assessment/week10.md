## Hello and welcome to your week 10 assessment. You've come a long way!

There are a combination of answers that need to be in code or written in plain old English. You'll see a "Code goes here" or a "Write Response".

### QUESTION 1
You're in an interview and are asked to describe how the different
objects of an MVC pattern interact with one another.

What would you say?

Write Response:

Model represents knowledge. It handles logic that interacts with the database, store and validate the data. View handles the client-side rendering of templates. Controllers serve a purpose of a manager of parsing user requests and communicates with the model.

### QUESTION 2
You have experience building out servers with Node/Express
and Rails. What are some of the pros and cons of each?

Write Response:

#### NodeJS:
Pros:
 - Asynchronous requests speed up the process of concurrent event handling.
 - One environment for from and back end.
 - All Javascript.
 - Non-blocking architecture allows implementation of socket server applications.
 - Ability to configure the server as per your custom needs.

 Cons:
 - More difficult to maintain.
 - Customized set up requires for effort.
 - Because of customization, other developers may find it more difficult to navigate.

#### Rails:
 - Built in file structure.
 - Fast set up and deployment.

 Cons:
 - Out of box you get more stuff that you actually need.
 - May require knowledge of more than one language: for front and back end.

### QUESTION 3
Create a Ruby Class called User which contains an instance method
called bark. Have that method return a string.

```ruby
#Code goes here:
class User
  def bark:
    "RuFFFF"
  end
end

```

### QUESTION 4
Your Rails app contains a Dog model. What is the Active Record
code to retrieve all Dog objects from the database?

```ruby
#Code goes here
Dog.all

```
### QUESTION 5
What is the purpose of an action within a controller?

Write Response:

Actions are instance methods of the class(Controller). Are called when a corresponding request is made.


### QUESTION 6
Why does Rails API remove the #new and #edit actions when creating
routes using the command rake routes?

Write Response:

The Rails API just assumes that there isn't a view being served for the new route and edit route. So...there just needs to be a create method and update.


### QUESTION 7
So far in this class you've been rendering most of the markup
on the client side using JavaScript. This week you learned about ERB.
What is that doing?

Write Response:

ERB stands for embedded Ruby which allows injection of Ruby code into html file.

#### QUESTION 8

Generate a Newspaper model with a Title attribute. Generate a Reader model with a Name attribute. Generate a subscription join model. Create the tables in the database.

```bash
Write bash commands here:

rails g model newspaper title:string
rails g model reader name:string
rails g model subscription newspaper:references reader:references

rake db:migrate

```

### Question 9:
Associate the models from Question 8 with a has_many :through association.

```ruby
#Write code here:

# app/model/newspaper.rb
class Newspaper < ApplicationRecord
  has_many :subscriptions
  has_many :readers, through: :subscriptions
end

# app/model/reader.rb
class Reader < ApplicationRecord
  has_many :subscriptions
  has_many :newspapers, through: :subscriptions
end

#app/model/subscription.rb
class Subscription < ApplicationRecord
  belongs_to :newspaper
  belongs_to :reader
end

```
### Question 10:

Write an Active record query to select all Readers who have subscribed to "New York Times" Newspaper.

```ruby
#Write code here:
@readers = Reader.where(:newspaper => "New York Times", params[:newspapers])

```
