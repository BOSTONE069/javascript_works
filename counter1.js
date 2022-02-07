let counter = 0; //using a variable and fucntion to do a count when count is clicked by the users of the page

if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {
    let counter = localStorage.getItem('counter'); //this gets the counter from the local storage
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter); //This updates the value to the counter

    if (counter % 10 === 0){ //this condition gives an alert in case the counter has reached a number divisible by 10
        alert(`Count is now ${counter}`);
    }  
}
//This event listener object is to enable the loading of the whole and listen to the query select of the button
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter'); //This is for updating the counter value to correct one 
    document.querySelector('button').onclick = count; 
    

});