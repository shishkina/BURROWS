$(function() {
  // ADD EVENTS HERE
  $('.column').on('click', '.delete', deleteCard);
  $('.column').on('click', '.finish', finishCard);
  $('#new-card-button').on('click', addCard);
});

function addCard() {
	let cardText = $('#new-card-text').val();
	let deleteButton = `<span class="delete">X</span>`;
	let finishButton = `<span class="finish">Finish</span>`;
	let todoList = $('#todo-column ul');

	let newCard = $.parseHTML(`
		<li class="card todo">
			${cardText}
			${deleteButton}
			${finishButton}
		</li>
	`);

	$(newCard).prependTo(todoList);
	$('#new-card-text').val('');
}

function finishCard() {
	$('#done-column ul').prepend($(this).parent());
	$(this).remove();
}

function deleteCard() {
	$(this).parent().remove();
}
