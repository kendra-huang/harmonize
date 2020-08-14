var money;

// const body = document.getElementsByClassName('a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold')[0]
const body = document.getElementsByClassName('a-spacing-small')[0]

const buttons = document.createElement('div');
buttons.className = "mucho";
buttons.id = "gracias";
buttons.innerHTML = '<button type="button" id="want_button" >Want</button><button type="button" id="need_button">Need</button>';
body.append(buttons);

document.getElementById("want_button").addEventListener("click", function(){
    money = document.getElementsByClassName("a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold")[0].textContent;
    console.log("diddiswork");
    console.log(money);
  });