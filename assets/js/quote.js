document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const month = today.getMonth() + 1; // getMonth() returns 0 (January) to 11 (December), so add 1
  const day = today.getDate(); // get the current day (1-31)

  // First fetch the dictionary for the current month
  fetch(`https://raw.githubusercontent.com/svaderia/quote-of-the-day/main/quotes/${month}.json`)
    .then(response => response.json())
    .then(dayToIndex => {
      // Use the day to get the index
      const index = dayToIndex[day.toString()]; // Convert day to string to match the keys in the dictionary
      console.log(index);
      if (index === undefined) {
        throw new Error(`No index found for day ${day}`);
      }

      // Now fetch the quotes array
      return fetch('https://raw.githubusercontent.com/svaderia/quote-of-the-day/main/quotes.json')
        .then(response => response.json())
        .then(quotes => {
          const randomQuote = quotes[index];
          if (randomQuote) {
            document.getElementById('quote').innerText = randomQuote.quote;
            document.getElementById('attribution').innerText = "- " + randomQuote.attribution;
          } else {
            console.error('No quote found for the index', index);
          }
        });
    })
    .catch(error => console.error('Error fetching the quote:', error));
});

