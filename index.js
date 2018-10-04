var orderItem = ''
fetch('https://galvanize-eats-api.herokuapp.com/menu')


    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        var select = document.querySelector('#selectBar')
        for (var i = 0; i < data.menu.length; i++) {
            var choice = document.createElement('option')
            choice.innerText = data.menu[i].name + " $" + data.menu[i].price
            choice.setAttribute('value', data.menu[i].name)
            choice.classList.add("dropdown-item")
            select.appendChild(choice)
            // choice.addEventListener('change', arrayAdd)
            // add a value to each menu item

        }
        var select = document.querySelector('#selectBar')
        select.addEventListener('change', function(event){
            orderItem = document.querySelector('#selectBar option:checked').innerText
        
        })
    
    })

var itemQuantity = ''
var quantity = document.querySelector('#quant')
quantity.addEventListener('change', function(event){
    itemQuantity = document.querySelector('#quant option:checked').innerText
})

var addItem = document.querySelector("#addItem")
addItem.addEventListener('click', populateList)

function populateList() {
    var orderBox = document.querySelector('.orderbox')
    var myOrder = document.createElement('p')
    orderBox.appendChild(myOrder)
    myOrder.innerText = itemQuantity + " x " + orderItem

}
    
// function selectItem() {
//     event.target.setAttribute("class", "frog")
//     console.log(event.target)
// }

// var options = document.querySelectAll('option')

// function arrayAdd() {
    
//     console.log(event.target)
    
//  }

//  var addItem = document.querySelector('#addItem')

//  addItem.addEventListener('click', valueAdd)

//  function valueAdd() {
//      var quantity = option.selected.innerHTML
//      console.log(quantity)
//  }






//Use a loop to create a line of text and fill it in with that input - in or out of the prior function
//Collect input and feed it into an equation that gives us our total