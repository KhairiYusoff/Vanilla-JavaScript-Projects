const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// function generateJoke() {
//   const url = "https://icanhazdadjoke.com/";
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch(url, config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data?.joke;
//     });
// }

async function generateJoke() {
  const url = "https://icanhazdadjoke.com/";
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch(url, config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

generateJoke();

jokeBtn.addEventListener("click", generateJoke);
