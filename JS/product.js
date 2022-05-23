let products = [
  {
    Photo: "images/men2.jpg",
    Name: "Bata Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus sunt rem doloremque aperiam maxime veniam fugiat molestiae asperiores error cum aliquid placeat, vero doloribus iure. Rem magni illum porro.",
    Price: 2500,
    DeliveryFee: "Choose delivery location for applicable shipping fee",
    id: "5468984",
  },
  {
    Photo: "images/men3.jpg",
    Name: "Bridlen Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus sunt rem doloremque aperiam maxime veniam fugiat molestiae asperiores error cum aliquid placeat, vero doloribus iure. Rem magni illum porro.",
    Price: 3700,
    DeliveryFee: "Choose delivery location for applicable shipping fee",
    id: "8958978",
  },
  {
    Photo: "images/men4.jpg",
    Name: "Clarks Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus sunt rem doloremque aperiam maxime veniam fugiat molestiae asperiores error cum aliquid placeat, vero doloribus iure. Rem magni illum porro.",
    Price: 4500,
    DeliveryFee: "Choose delivery location for applicable shipping fee",
    id: "9578787",
  },
];

let deliveryPoints = [
  {
    name: "Nairobi",
    options: ["Lavington", "Kilimani", "Westlands"],
  },
  {
    name: "Kiambu",
    options: ["Kiambu Township", "Githunguri", "Lower Kabete"],
  },
  {
    name: "Kajiado",
    options: ["Ongata Rongai", "Kitengela", "Ngong"],
  },
];

let receivedId = decodeURIComponent(window.location.search);
let theId = receivedId.substring(1);

let selectedItem = products.find((item) => item.id == theId);

document.getElementById("itemXName").innerText = selectedItem.Name;
document.getElementById("itemXImg").src = selectedItem.Photo;
document.getElementById("itemXDesc").innerText = selectedItem.Desc;
document.getElementById("itemXPrice").innerText = "KES." + selectedItem.Price;
document.getElementById("deliveryPrice").innerText = selectedItem.DeliveryFee;

document.getElementById("locationOpt").onchange = function () {
  let location = document.getElementById("locationOpt").value;

  if (location) {
    document
      .getElementById("locationOpt2")
      .classList.remove("hide-location-output2");
  } else {
    document
      .getElementById("locationOpt2")
      .classList.add("hide-location-output2");
  }
  let selectedLocation = deliveryPoints.find((point) => point.name == location);

  document.getElementById("optOne").innerText = selectedLocation.options[0];
  document.getElementById("optTwo").innerText = selectedLocation.options[1];
  document.getElementById("optThree").innerText = selectedLocation.options[2];
};

function totalPrice() {
  let priceOfSelectedItem = selectedItem.Price;
  let noOfItems = document.getElementById("noOfItems").value;
  let total = priceOfSelectedItem;

  if (!noOfItems) {
    total = priceOfSelectedItem;
  }
  if (noOfItems > 1) {
    total = noOfItems * priceOfSelectedItem;
  }

  let priceForDelivery = 0;

    let location = document.getElementById("locationOpt2").value;
    let msg = "shipping fee to";

    if (location == "Lavington") {
      priceForDelivery = 80;
    } else if (location == "Kilimani") {
      priceForDelivery = 60;
    } else if (location == "Westlands") {
      let price = 40;
    } else if (location == "Kiambu Township") {
      priceForDelivery = 100;
    } else if (location == "Githunguri") {
      priceForDelivery = 150;
    } else if (location == "Lower Kabete") {
      priceForDelivery = 120;
    } else if (location == "Ongata Rongai") {
      priceForDelivery = 150;
    } else if (location == "Kitengela") {
      priceForDelivery = 180;
    } else if (location == "Ngong") {
      priceForDelivery = 120;
    }

   if(priceForDelivery){
    document.getElementById("deliveryPrice").innerText =
    "+ KES. " + priceForDelivery + " " + msg + " " + location;
   }

  document.getElementById("totalPrice").innerText =
    "KES." +(total + priceForDelivery);

    return total + priceForDelivery
}

totalPrice();
document.getElementById("noOfItems").onkeyup = totalPrice
document.getElementById("locationOpt2").onchange = totalPrice;


function payNow() {    
  paypal
    .Buttons({
      createOrder: function (data, actions) {
        // Set up the transaction
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: totalPrice() / 100,
              },
            },
          ],
        });
      },
      onApprove: function(data, actions) {
        alert('Payment successfully');
    },
    onCancel: function (data) {
        alert('Payment Not successfully');
      }
    })
    .render("#paypal-button-container");
}
payNow();
