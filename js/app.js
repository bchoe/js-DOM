/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var taylorSwift = document.getElementById('name1');
taylorSwift.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following:

Project Manager*/


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/




/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var princeMe = document.getElementsByClassName('profile');
console.log(princeMe);
princeMe[0].innerHTML = 'Diamonds and pearls'


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/



/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/



/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var familyGuy = document.createElement('div');
familyGuy.id = 'name7';
familyGuy.innerHTML = 'Peter Griffin';
var parentDiv = document.getElementById('nameParent');
parentDiv.appendChild(familyGuy);


/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

/*var name = document.createElement('div');
name.id = 'name9';
name.innerHTML = 'Long Duck Dong';
block3[2].appendChild(name);*/
var startDiv = document.getElementsByClassName('block3 col-sm-4');
console.log(startDiv);

var myPic = document.getElementsByTagName('img');
console.log(myPic);
myPic[8].src = "http://www.dailyactor.com/wp-content/uploads/2014/05/Long+Duk+Dong-Gedde+Watanabe-audition.jpg";

var nameDiv = document.createElement('div');
nameDiv.innerHTML = 'Long Duk Dong';
nameDiv.id = 'name9';
startDiv[2].appendChild(nameDiv);