
import pageContent from './renderContent.js';

import {menu} from './menu.js';

import {contact} from './contact.js';

/**** ABOUT TAB ****/
const aboutHeader = document.createElement('INPUT');
aboutHeader.setAttribute("type", "radio");
aboutHeader.setAttribute("name", "tabs");
aboutHeader.id = "aboutTab";
aboutHeader.checked = true; // Displays main on page load
// About label
const aboutLabel = document.createElement("LABEL");
aboutLabel.setAttribute("for", "aboutTab");
aboutLabel.innerText = "About";

// Add to DOM
document.getElementById("main").appendChild(aboutHeader);
document.getElementById("main").appendChild(aboutLabel);

// Create content (description) tab body
pageContent("main");


/**** MENU TAB ****/
const menuHeader = document.createElement('INPUT');
menuHeader.setAttribute("type", "radio");
menuHeader.setAttribute("name", "tabs");
menuHeader.id = "menuTab";
// Menu label
const menuLabel = document.createElement("LABEL");
menuLabel.setAttribute("for", "menuTab");
menuLabel.innerText = "Menu";

// Add to DOM
document.getElementById("main").appendChild(menuHeader);
document.getElementById("main").appendChild(menuLabel);

// Create menu tab body
menu("main").populateMenu();


/**** CONTACT TAB ****/
const contactHeader = document.createElement('INPUT');
contactHeader.id = "contactTab";
contactHeader.setAttribute("type", "radio");
contactHeader.setAttribute("name", "tabs");
// Contact label
const contactLabel = document.createElement("LABEL");
contactLabel.setAttribute("for", "contactTab");
contactLabel.innerText = "Contact";

// Add to DOM
document.getElementById("main").appendChild(contactHeader);
document.getElementById("main").appendChild(contactLabel);

// Create contact tab body
contact("main").render();