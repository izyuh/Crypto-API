const list = document.getElementById("coinList");
const button = document.getElementById("button");
const API_KEY = process.env.MY_API_KEY;

async function getData() {
  try {
    const request = await fetch(
      `http://api.coinlayer.com/api/live?access_key=${API_KEY}`
    );
    data = await request.json();

    console.log(list);

    Object.entries(data.rates).forEach(([coin, rate]) => {
      const listItem = document.createElement("li");
      const coinSpan = document.createElement("span");
      const priceSpan = document.createElement("span");

      //adds coin name to li
      coinSpan.textContent = coin;

      listItem.appendChild(coinSpan);

      //adds coin price to li

      priceSpan.textContent = rate;

      listItem.appendChild(priceSpan);

      //adds li to list

      list.appendChild(listItem);

      button.style.display = "none";
    });
  } catch (error) {
    console.log(error);
  }
}
