// Initialize button with user's preferred color
let stretchButton = document.getElementById("stretchButton");
let workoutButton = document.getElementById("workoutButton");
let meditateButton = document.getElementById("meditateButton");
let firstScreen = document.querySelector(".first-screen");
let displayResults = document.querySelector('.display-results');

stretchButton.addEventListener("click", () => {
  firstScreen.style.display = 'none'
  for(const vid of stretchingArray){
     new Video(displayResults, vid)
  }
})

meditateButton.addEventListener('click',() => {
  firstScreen.style.display = 'none'
  for(const vid of meditationArray) {
    new Video(displayResults, vid)
  }
})

workoutButton.addEventListener("click", async () => {
  firstScreen.style.display = 'none'
  for(const vid of workoutArray) {
    new Video(displayResults, vid)
  }
})


// // chrome.storage.sync.get("color", ({ color }) => {
// //   button.style.backgroundColor = color;
// // });

// // When the button is clicked, inject setPageBackgroundColor into current page
// button.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }); //no idea what this does 

//   chrome.scripting.executeScript({          
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
//   // console.log('works!')
// });

// // The body of this function will be executed as a content script inside the current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

