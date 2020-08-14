
const skipbutton = document.getElementsByClassName('a-box a-color-alternate-background sc-buy-box-inner-box')[0];
var body = document.getElementsByClassName('a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold');
for (var i = 0; i < body.length; i++) {
  body = document.getElementsByClassName('a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold')[i];
  const buttons = document.createElement('div');
  buttons.className = "mucho";
  buttons.id = "gracias";
  buttons.innerHTML = '<button type="button home-button" id="button1" >Want</button><button type="button contact-button" id="button2">Need</button>';
  body.append(buttons);
}

const skip = document.createElement('div');
skip.className = "button";
skip.id = "skipdone";
skip.innerHTML = '<button type="button home-button" id="button3" >Skip</button><button type="button home-button" id="button4">Done</button>';
skipbutton.append(skip);
