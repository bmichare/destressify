// background.js
//this continually runs, looking for a trigger - in this case when the extension is installed

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });             //stores this info within chrome under "color"
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// chrome.runtime.onStartup(alert('test'))

// chrome.app.runtime.onLaunched.addListener(function() {
//   chrome.app.window.create('index.html', {
//     id: 'main',
//     bounds: { width: 620, height: 500 }
//   });
// });
// chrome.alarms.onAlarm.addListener(function( alarm ) {
//   alert('works');
// });


// chrome.runtime.onInstalled.addListener(() => {
//   console.log('testing');

//   //button functionality
//   button.addEventListener('click', console.log('works'))

// });

