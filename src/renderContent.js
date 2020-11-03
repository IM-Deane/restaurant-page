const pageContent = (id) => {
  // Restaurant page content
  const mainContent = document.getElementById(id);

  const goldText = "#9C841A";
  const whiteText = "#FFFFFF";
  const offBlack = "#1d2945";

  const content = document.createElement('div');
  content.id = "content";
  content.classList.add('tab');

  // Add content tab to DOM
  mainContent.appendChild(content);

  // RESTAURANT NAME
  const name = "RAVISH";
  const nameElement = document.createElement('h1');
  nameElement.innerText = name;
  nameElement.style.color = whiteText;

  // Render name
  content.appendChild(nameElement);

  // RESTAURANT DESCRIPTION
  const writeUpBox = document.createElement('div');

  const writeUpTitle = document.createElement('h3');
  writeUpTitle.innerText = "Surrender to the unknown!";
  writeUpTitle.style.color = goldText;
  writeUpBox.appendChild(writeUpTitle);

  const writeUpContent = document.createElement('p');
  writeUpContent.style.color = whiteText;
  writeUpContent.innerText = `
  Welcome to RAVISH, a contemporary fine-dining gastropub 
  that has taken the local populace by storm.

  Our dishes will knock you over the head and carry you
  off to uncharted territories.

  Prepare to be RAVISHED!`;

  writeUpBox.appendChild(writeUpContent);
  // render description
  content.appendChild(writeUpBox);

  // RESTAURANT IMAGE 
  const img = document.createElement('img');
  img.src = "https://upload.wikimedia.org/wikipedia/commons/1/15/365_AS_-_contemporary_lounge_bar.jpg";

  // Render image
  content.appendChild(img);

}

export default pageContent;