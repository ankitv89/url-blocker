chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log('details', details)
        if (details.url.indexOf("news.google.com") != -1) {
            return { redirectUrl: chrome.runtime.getURL('index.html') };
        }
    },
    { urls: ["*://*/*"] },
    ["blocking"]
);
