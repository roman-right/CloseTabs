chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      chrome.tabs.query({active: true, currentWindow: true}, function(activeTabs) {
        let activeIndex = activeTabs[0].index;
  
        if (command === "close-tabs-right") {
          for (let i = tabs.length - 1; i > activeIndex; i--) {
            if (!tabs[i].pinned) {
              chrome.tabs.remove(tabs[i].id);
            }
          }
        } else if (command === "close-tabs-left") {
          for (let i = 0; i < activeIndex; i++) {
            if (!tabs[i].pinned) {
              chrome.tabs.remove(tabs[i].id);
            }
          }
        }
      });
    });
  });
  