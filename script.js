// This function starts the game by running our "start" scene.
function startGame() {
  showScene("start");
}

// Function to reset the game to the start screen.
function resetGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("start-screen").style.display = "flex"; // Show start screen again
}

function showScene(sceneKey) {
  // Resets game if scene key is "reset".
  if (sceneKey === "reset") {
    resetGame();
    return;
  }
  
  const scene = story[sceneKey];
  const textElement = document.getElementById("text");
  const nameElement = document.getElementById("character-name");
  const backgroundElement = document.getElementById("background");
  const choicesDiv = document.getElementById("choices");

  // Set the scene text and background image.
  backgroundElement.src = "images/" + scene.background || "default.jpg";
  nameElement.innerText = scene.character || "";
  textElement.innerText = scene.text;
  
  
  choicesDiv.innerHTML = "";
  // Create the dialogue option buttons.
  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.classList.add("choice-button");
    button.innerText = choice.text;
    button.onclick = () => showScene(choice.nextScene);
    choicesDiv.appendChild(button);
  });
}



// Hides the start screen and shows the game when start button is pressed.
document.getElementById("start-button").onclick = function () {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game").style.display = "block";
  startGame();
};
  