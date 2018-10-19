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
            choice.setAttribute('id', data.menu[i].price)
            choice.classList.add("dropdown-item")
            select.appendChild(choice)

        }

        select.addEventListener('change', function(event){
            orderItem = document.querySelector('#selectBar option:checked').innerText
            orderPrice = document.querySelector('#selectBar option:checked').id
        
        })
    
    })

var itemQuantity = ''
var quantity = document.querySelector('#quant')
quantity.addEventListener('change', function(event){
    itemQuantity = document.querySelector('#quant option:checked').innerText
})

 var addItem = document.querySelector('#addItem')
 addItem.addEventListener('click', populateList)
 var thisOrderHere = {cart: []}

function populateList() {
    var thingOrdered = document.querySelector('.thingordered')
    var myOrder = document.createElement('p')
    thingOrdered.appendChild(myOrder)
    myOrder.innerText = itemQuantity + " x " + orderItem
    var subtotal = document.querySelector('.subtotal')
    var subtotalValue = orderPrice * itemQuantity
    var taxValue = (subtotalValue * .07).toFixed(2)
    var tax = document.querySelector('.tax')
    var totalValue = subtotalValue + taxValue
    var total = document.querySelector('.total')
    subtotal.innerText = 'Subtotal ' + '$' + parseFloat(subtotalValue)
    tax.innerText = 'Tax ' + '$' + parseFloat(taxValue)
    total.innerText = 'Total ' + '$' + parseFloat(totalValue + parseInt(total.innerText))
    var newItem = {}
    newItem[orderItem] = itemQuantity
    thisOrderHere.cart.push(newItem)
}


var submitButton = document.querySelector('#submitbutton')

submitButton.addEventListener('click', sendOrder)

function sendOrder(event) {

    event.preventDefault()
fetch("https://galvanize-eats-api.herokuapp.com/orders", {
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(thisOrderHere)
})
       .then(function (response) {
        var thanks = document.getElementById('thanks')
        thanks.innerText= 'Thank you for your order.'
       }) 
}
