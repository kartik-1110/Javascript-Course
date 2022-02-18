let welcomeEl = document.getElementById("welcome-el");

// let name = "Kartik Pal";
// let greeting = "Welcome back ";

// welcomeEl.innerText = greeting + name;

function Greeting(greet, name) {
  welcomeEl.textContent = `${greet}! ${name}`;
}

Greeting("Welcome", "Kartik");
