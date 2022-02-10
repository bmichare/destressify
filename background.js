// background.js
//this continually runs, looking for a trigger - in this case when the extension is installed

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });             //stores this info within chrome under "color"
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onStartup(alert('test'))


// chrome.runtime.onInstalled.addListener(() => {
//   console.log('testing');

//   //button functionality
//   button.addEventListener('click', console.log('works'))

// });

