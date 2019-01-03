#### Learning Objectives
- Practice using JavaScript to manipulate the DOM
- Practice using JavaScript Timers (Web Chrome API)

# Make a working virtual clock

Today you are going to build a clock!

Start by planning! Draw a clock, break down the problem.

### Step 1
Define 3 variables and grab the associated element from the DOM using js or jQuery

- minuteHand
- secondHand
- hourHand

### Step 2
- Using setInterval and JavaScript make the second hand do a full rotation in 60 seconds.

		setInterval(Some type of callback(incremement degrees);}, time unil invocation);

- You will have to utilize the css attribute transform: rotate()
	
		.setAttribute({transform: "rotate(something goes here)"});


### Step 3
- Make the minute hand do a full rotation in 1 hour (6 degrees per minute )

### Step 4
- Make the hour hand do a full rotation in 12 hours (.5 degrees per minute)