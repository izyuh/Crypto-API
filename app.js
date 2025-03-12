
const list = document.getElementById("coinList");
const button = document.getElementById("button");
const searchBar = document.getElementById("search");

async function getData() {
  console.log("fetching");
  try {
    const request = await fetch(
      `http://api.coinlayer.com/api/live?access_key=${apiKey}`
    );
    data = await request.json();

    console.log(list);

    Object.entries(data.rates).forEach(([coin, rate]) => {
      //creates generics to be used for each entry
      const listItem = document.createElement("li");
      const coinSpan = document.createElement("span");
      const priceSpan = document.createElement("span");

      //creates a new span and sets content to coin name
      coinSpan.textContent = coin;

      listItem.appendChild(coinSpan);

      //creates a new span and sets content to rate of the coin

      priceSpan.textContent = rate;

      listItem.appendChild(priceSpan);

      //adds list item just made to list
      list.appendChild(listItem);

      //hides 'click me' button after initial press
      button.style.display = "none";
    });
  } catch (error) {
    console.log(error);
  }
}

async function start() {
  searchBar.style.display = "block";

  await getData();

  setTimeout(() => {
    start();
  }, 6000000);
}

function searchFilter() {
  //gets user input
  let input = searchBar.value.toUpperCase();

  //selects all list items using id of list and then all list items
  const listItems = document.querySelectorAll("#coinList li")

  //loops through all list items
  listItems.forEach(listItem => {
    //selects all coinspans from list items
    const coinSpan = listItem.querySelector("span");

    //if coin span matches the user input then display it
    if(coinSpan && coinSpan.textContent.toUpperCase().includes(input)) {
      listItem.style.background = "red";
    }
    //otherwise dont
    else {
      listItem.style.background = "blue"
    }
  })
}