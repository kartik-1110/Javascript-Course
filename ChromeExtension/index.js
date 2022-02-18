let myLeads = [];
let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let deleteBtn = document.getElementById("delete-btn");
let tabBtn = document.getElementById("tab-btn");

const localStorageLeads = JSON.parse(localStorage.getItem("myLeads"));

if (localStorageLeads) {
  myLeads = localStorageLeads;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target = '_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

// Tab button function
const tabHandler = () => {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
};

// delete button function
const deleteHandler = () => {
  // console.log("clicked delete");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
};

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  // console.log(myLeads);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
