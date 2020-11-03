
const Day = (name, id, hours) => {

  // Display item in menu format
  const display = () => name + ": " + hours;

  return { name, id, hours, display }
}


const contact = ((id) => {

  // Use the id of the contact tab to append items
  const mainContent = document.getElementById(id);

  const contactTab = document.createElement('div');
  contactTab.id = "contact";
  contactTab.classList.add('tab');

  // Add contact tab to DOM
  mainContent.appendChild(contactTab);

  // Restaurant info
  const name = "RAVISH";
  const streetAddress = "4797 LYNDEN ROAD";
  const city = "BEAVERTON";
  const province = "ONTARIO";
  const zipCode = "L0K-1A0";
  // Random fake number
  const phone = "416-555-0134";
  // Hours of operation
  const hoursOfOperation = [];


  const render = () => {

    const goldText = "#9C841A";
    const whiteText = "#FFFFFF";

    const infoBox = document.createElement('div');
    infoBox.id = "restaurant-info";
    // Add to DOM
    contactTab.appendChild(infoBox);

    // Render informaiton
    infoBox.innerHTML =
      `<p style="color: ${goldText}">${name}</p>
    <p style="color: ${whiteText}">${streetAddress}</p>
    <p style="color: ${whiteText}">${city}, ${province}, ${zipCode}</p>

    <h4 style="color: ${goldText}">CALL US:</h4>
    <p style="color: ${goldText}">P: <span style="color: ${whiteText}">${phone}</span></p>
    `
    // Determine restaurant hours 
    _setHours();

    const hoursBox = document.createElement('div');
    hoursBox.id = "restaurant-hours";
    // Hours of operation section head
    hoursBox.innerHTML = `<h4 style="color:${goldText}">VISIT US:</h4>`;

    contactTab.appendChild(hoursBox);

    hoursOfOperation.forEach(day => {
      hoursBox.innerHTML += `
      <p data-day="${day.name}" style="color: ${goldText}">${day.name}:
       <span style="color: ${whiteText}">${day.hours}</p>`;
    });
  }


  const _setHours = () => {
    // Hours
    const mondayToThursday = "11:30AM-11PM";
    const fridaySaturday = "11:30AM-MIDNIGHT";
    const sundayhours = "3PM-10PM";

    // SUNDAY
    const sunday = Day("SUNDAY", 0, sundayhours);
    hoursOfOperation.push(sunday);
    // MONDAY
    const monday = Day("MONDAY", 1, mondayToThursday);
    hoursOfOperation.push(monday);
    // TUESDAY
    const tuesday = Day("TUESDAY", 2, mondayToThursday);
    hoursOfOperation.push(tuesday);
    // WEDNESDAY
    const wednesday = Day("WEDNESDAY", 3, mondayToThursday);
    hoursOfOperation.push(wednesday);
    // THURSDAY
    const thursday = Day("THURSDAY", 4, mondayToThursday);
    hoursOfOperation.push(thursday);
    // FRIDAY
    const friday = Day("FRIDAY", 5, fridaySaturday);
    hoursOfOperation.push(friday);
    // SATURDAY
    const saturday = Day("SATURDAY", 6, fridaySaturday);
    hoursOfOperation.push(saturday);
  }

  return {render}

})


export {contact}