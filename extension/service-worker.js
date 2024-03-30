// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function setupContextMenu() {
  chrome.contextMenus.create({
    id: 'define-word',
    title: 'Define',
    contexts: ['selection']
  });
}

function getVideoTagsInfo(tabId, callback) {
  console.log(tabId);
  chrome.tabs.executeScript(tabId, {
    code: `
      Array.from(document.getElementsByTagName('video')).map(video => ({
        src: video.src,
        currentTime: video.currentTime,
        duration: video.duration,
        paused: video.paused,
        volume: video.volume,
        readyState: video.readyState,
      }))
    `
  }, callback);
}

chrome.runtime.onInstalled.addListener(() => {
  setupContextMenu();
});

chrome.contextMenus.onClicked.addListener((data, tab) => {
  // Store the last word in chrome.storage.session.
  chrome.storage.session.set({ lastWord: data.selectionText });
  console.log('sjhdgjh');
  // Make sure the side panel is open.
  chrome.sidePanel.open({ tabId: tab.id });

   // Get information of video tags on the current tab.
  //  getVideoTagsInfo(tab.id, (results) => {
  //   console.log(results); // Do something with the results.
  // });

});
