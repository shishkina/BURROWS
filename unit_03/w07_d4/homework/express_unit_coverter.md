## EXPRESS UNIT COVERTER

Tonight you'll make a unit converter using node and express to covert miles to kilometers and farenheit to celsius. It's not very fancy looking. But it will serve as a proof-of-concept for using express.

###Converting Degrees

###To Celsius

Make a GET route for `farenheit` that has a variable corresponding to a number that will be converted to celsius.

http://localhost:3000/weather/to-celsius/:farenheit
 
Here are the formulas:

-  celsius = (farenheit - 32) * (5/9)
-  farenheit = (celsius * 9) / 5 + 32

Write the code that will convert the degrees that the user sends through in the url parameters, and respond with the answer. 

Render the calculation in the browser using in json format

###To Farenheit
Make another route for "to-farenheit" from celsius.  

http://localhost:3000/weather/to-farenheit/:celsius

Render the calculation in the browser using in json format

## Distance Converter

###To Miles
Make a GET route for `kilometers` that has one variable corresponding to a number that will be converted to miles. 

http://localhost:3000/distance/to-miles/:kilometers

Here are the formulas:

-  kilometers = miles × 1.609344
-  miles = kilometers / 1.609344


Write the code that will convert the distance in kilometers that the user sends through in the url parameters, and respond with the answer. 

Render the calculation in the browser using in json format

###To Kilometers
Make another route for to-kilometers from miles.

http://localhost:3000/distance/to-kilometers/:miles

Render the calculation in the browser using in json format

###To Shake-it-speare
Create a route that makes a GET request to the Shake-It-Speare API for a poem.

The route should be..

http://localhost:3000/poemgenerator

render that poem in the browser.

### Running the server

See the responses from your running server in your browser.

