fetch('https://galvanize-eats-api.herokuapp.com/menu')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        var select = document.querySelector('.dropdown-menu')
        for (var i = 0; i < data.menu.length; i++) {
            var choice = document.createElement('a')
            choice.innerText = data.menu[i].name + " $" + data.menu[i].price
            choice.setAttribute('value', data.menu[i].name)
            choice.classList.add("dropdown-item")
            select.appendChild(choice)
            choice.addEventListener('click', arrayAdd)
            // add a value to each menu item
        }
    })
var chosenSnacks = []
var option = document.querySelectAll(option)

function arrayAdd() {
   option.innerText + " " + chosenSnacks.push(event.target.innerText)
    
 }
//make function here

// function populateList() {
//     console.log(event.target.innerText)
//     var orderBox = document.querySelector('.orderbox')
//     var orderItem = document.createElement('p')
//     orderItem.innerText = event.target.innerText
//     orderBox.appendChild(orderItem)
//     // add a value and pull the value in here
//     // orderBox = appendChild(orderItem)

// }




//Use a loop to create a line of text and fill it in with that input - in or out of the prior function
//Collect input and feed it into an equation that gives us our total