let Bata = {
    Photo: "images/men2.jpg",
    Name: "Bata Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Price:"2,500",
    id: "5468984"
}

let Bridlen = {
    Photo: "images/men3.jpg",
    Name: "Bridlen Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Price:"3,700",
    id: "8958978"
}

let Clarks = {
    Photo: "images/men4.jpg",
    Name: "Clarks Shoes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Price:"4,500",
    id: "9578787"
}

document.getElementById("itemOneImg").src = Bata.Photo;
document.getElementById("itemOneName").innerText = Bata.Name;
document.getElementById("itemOneDesc").innerText = Bata.Desc;
document.getElementById("itemOnePrice").innerText = "KES"+"."+ Bata.Price;

document.getElementById("itemTwoImg").src = Bridlen.Photo;
document.getElementById("itemTwoName").innerText = Bridlen.Name;
document.getElementById("itemTwoDesc").innerText = Bridlen.Desc;
document.getElementById("itemTwoPrice").innerText = "KES"+"."+ Bridlen.Price;

document.getElementById("itemThreeImg").src = Clarks.Photo;
document.getElementById("itemThreeName").innerText = Clarks.Name;
document.getElementById("itemThreeDesc").innerText = Clarks.Desc;
document.getElementById("itemThreePrice").innerText = "KES"+"."+ Clarks.Price;

document.getElementById("itemOne").onclick = function(){
    window.location.href = "product.html" + "?" + Bata.id;
}
document.getElementById("itemTwo").onclick = function(){
    window.location.href = "product.html" + "?" + Bridlen.id;
}
document.getElementById("itemThree").onclick = function(){
    window.location.href = "product.html" + "?" + Clarks.id;
}
