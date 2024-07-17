const smEvents = [{
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 240000,
    date: "06/01/2017"
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 250000,
    date: "06/01/2018"
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 257000,
    date: "06/01/2019"
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 130000,
    date: "06/01/2017"
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 140000,
    date: "06/01/2018"
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 150000,
    date: "06/01/2019"
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 40000,
    date: "06/01/2017"
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 45000,
    date: "06/01/2018"
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 50000,
    date: "06/01/2019"
  },
];
buildDropdown();
function buildDropdown() {
    let cityDropdown = document.getElementById("cityDropdown");
    let currentEvents = smEvents;

    let distinctCities = [... new Set(currentEvents.map((event)=> event.city))]
    for(let i = 0; i < distinctCities.length; i++) {
        let menuItem = `<li><a class="dropdown-item" href="#">${distinctCities[i]}</a></li>`;
        cityDropdown.innerHTML += menuItem;
    }
}
displayStats(smEvents)
function displayStats(events) {
    let total = 0;
    let average = 0;
    let most = 0;
    let least = -1;
    let currentAttendance = 0;
    let currentHighest = 0;
    let currentLowest = 9999 ** 9999;

    for(let i = 0; i<events.length; i ++){
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
    document.getElementById("average").innerHTML = Math.trunc(average).toLocaleString();
    document.getElementById("most").innerHTML = most.toLocaleString();
    document.getElementById("least").innerHTML = least.toLocaleString();
}