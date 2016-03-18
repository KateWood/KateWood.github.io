// var divToManipulate = document.getElementById('myDiv');
// divToManipulate.innerHTML = 'Goodbye world!';

// $('#myDiv').html('Goodbye world!')

// $('#container').html("This isn't a container")

// var myDiv = document.getElementById('container');
// var newP = document.createElement('p');
// newP.innerHTML = 'Hello complicated, multi-step world of adding an element to the DOM';
// myDiv.appendChild(newP)

// $('#container').append('<p>')
// $('p').html('Hello simple insertion using jQuery chaining')

// $('p').addClass('red')

// $('.bold').removeClass('bold')

// var $newP = $('<p>');
// $newP.html('This is another P tag!');
// $newP.addClass('red');
// $('#myDiv').append($newP)


// $('#container').append('<p>')
// $('p').html('Hello simple insertion using jQuery chaining')


// $('#secondBtn').on('click', function(){
// 	event.stopPropagation()
// 	console.log('You clicked me!')
// })

// $('#container').on('click', function(){
// 	console.log('Yes, sir!')
// })

// var containerInnerHtml = $( '#container').html()

// console.log(containerInnerHtml)

// $('#container').append('<img src="https://www.petfinder.com/wp-content/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg">')

// console.log($( '#container').html())

// $('#secondBtn').remove()

// var drinks = ['water', 'tea', 'coffee']

// var foods = ['pizza', 'salad', 'tacos']

// for(var i = 0; i < drinks.length; i++) {
// 	$('#drinks').append('<li>' + drinks[i] + '</li>')
// }

// for(var i = 0; i < foods.length; i++) {
// 	$('#foods').append('<li>' + foods[i] + '</li>')
// }

$(document).ready(function(){

	$('#myBtn').on('click', function(){
		$('h1').toggleClass('red')
	})
	$('#addDrink').on('click', function(){
		var newDrink = $('#drinkInput').val();
		$('#drinks').append('<li>' + newDrink + '</li>');
		$('#drinkInput').val('');
	});

	$('#addFood').on('click', function(){
		var newFood = $('#foodInput').val();
		$('#foods').append('<li>' + newFood + '</li>');
		$('#foodInput').val('');
	});

	$('button').mouseover(function(){
		$(this).addClass('red')
	})

	$('button').mouseout(function(){
		$(this).removeClass('red')
	})
	
})








