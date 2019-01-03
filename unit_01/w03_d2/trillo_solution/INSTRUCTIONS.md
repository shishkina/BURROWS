### Trillo

* As a user, I want cards in either column to disappear when I click the delete button, so I can keep my done column compact.
* As a user, I want cards in the todo column to move to the done column when I click the finish span, so I can keep track of my progress
* As a user, I want to a new card to be added to the todo column when I enter text and click the 'Add Card' button, so I can add new things to my list


Anatomy of a list item in the todo column:

```
<li class="card todo">
  Wash the car
  <span class="delete">X</span>
  <span class="finish">Finish</span>
</li>

```

Anatomy of a list item in the done column:

```
<li class="card done">
  Do 20 jumping jacks
  <span class="delete">X</span>
</li>

```