const apiKey = "48b680aabbcbc42dc3926f6202c5083f";
const list = document.getElementById("coinList");
const button = document.getElementById('button');

async function getData() {
  try {
    const request = await fetch(
      `http://api.coinlayer.com/api/live?access_key=${apiKey}`
    );
    data = await request.json();

    console.log(list);

    Object.entries(data.rates).forEach(([coin,rate]) => {

      //creates generics to be used for each entry
      const listItem = document.createElement("li");
      const coinSpan = document.createElement('span');
      const priceSpan = document.createElement('span');

      //creates a new span and sets content to coin name
      coinSpan.textContent = coin;

      listItem.appendChild(coinSpan);

      //creates a new span and sets content to rate of the coin

      priceSpan.textContent = rate;

      listItem.appendChild(priceSpan);

      //adds list item just made to list
      list.appendChild(listItem);
      

      //hides 'click me' button after initial press
      button.style.display = 'none';

    });
  } catch (error) {
    console.log(error);
  }
}
