const smEvents = [
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 240000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 250000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 257000,
    date: "06/01/2019",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 130000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 140000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 150000,
    date: "06/01/2019",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 40000,
    date: "06/01/2017",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 45000,
    date: "06/01/2018",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 50000,
    date: "06/01/2019",
  },
];
buildDropdown();
displayStats(JSON.parse(localStorage.getItem("eventData")) || smEvents, "All");
function buildDropdown() {
  let cityDropdown = document.getElementById("cityDropdown");
  let currentEvents = JSON.parse(localStorage.getItem("eventData")) || smEvents;
  if (currentEvents == null) {
    currentEvents = smEvents;
    localStorage.setItem("eventData", JSON.stringify(currentEvents))
  }

  cityDropdown.innerHTML = `<li><a class="dropdown-item" onclick="getEvents(this)" data-city="All">All</a></li>`;
  let distinctCities = [...new Set(currentEvents.map((event) => event.city))];
  for (let i = 0; i < distinctCities.length; i++) {
    menuItem = `<li><a class="dropdown-item" onclick="getEvents(this)" data-city="${distinctCities[i]}">${distinctCities[i]}</a></li>`;
    cityDropdown.innerHTML += menuItem;
  }
}
function displayStats(events, selected) {
  let total = 0;
  let average = 0;
  let most = 0;
  let least = -1;
  let currentAttendance = 0;
  let currentHighest = 0;
  let currentLowest = events[0].attendance;

  for (let i = 0; i < events.length; i++) {
    currentAttendance = events[i].attendance;
    total += currentAttendance;
    if (currentHighest < events[i].attendance) {
      currentHighest = events[i].attendance;
    }
    if (currentLowest > events[i].attendance) {
      currentLowest = events[i].attendance;
    }
    most = currentHighest;
    least = currentLowest;
  }
  average = total / events.length;
  document.getElementById("total").innerHTML = total.toLocaleString();
  document.getElementById("average").innerHTML =
    Math.round(average).toLocaleString();
  document.getElementById("most").innerHTML = most.toLocaleString();
  document.getElementById("least").innerHTML = least.toLocaleString();
  document.getElementById(
    "statsHeader"
  ).innerText = `Stats For ${selected} Events`;
}
function getEvents(element) {
  let city = element.getAttribute("data-city");
  let currentEvents = JSON.parse(localStorage.getItem("eventData")) || smEvents;
  let filteredEvents = currentEvents;
  if (city == "All") {
    filteredEvents = currentEvents;
  } else {
    filteredEvents = currentEvents.filter(c => c.city == city);
  }
  displayStats(filteredEvents, city);
}
function saveEventData() {
  let currentEvents = JSON.parse(localStorage.getItem("eventData")) || smEvents;
  let eventObj = {};
  let stateSelector = document.getElementById("event-state");
  eventObj["event"] = document.getElementById("event-name").value;
  eventObj["city"] = document.getElementById("event-city").value;
  eventObj["state"] =
    stateSelector.options[stateSelector.selectedIndex].text;
  eventObj["attendance"] = parseInt(
    document.getElementById("event-attendance").value
  );
  let eventDate = document.getElementById("event-date").value;
  let eventDate2 = `${eventDate} 00:00`;
  eventObj["date"] = new Date(eventDate2).toLocaleDateString;
  currentEvents.push(eventObj);
  localStorage.setItem("eventData", JSON.stringify(currentEvents));
  buildDropdown();
}
//  {
//  event: "ComicCon",
//  city: "New York",
//  state: "New York",
//  attendance: 240000,
//  date: "06/01/2017",
//},
