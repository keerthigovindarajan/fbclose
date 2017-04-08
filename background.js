var removing = browser.tabs.query({url: "*://*.facebook.com/*"});
removing.then(onRemoved, onError);

function onRemoved(tabs)
 {
 var removing = browser.tabs.remove(tabs);
  console.log(`Removed`);
}

function onError(error)
 {
  console.log(`Error: ${error}`);
}


