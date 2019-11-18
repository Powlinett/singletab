const liste = document.getElementById('listeonglets');

   chrome.tabs.query({currentWindow: true}, function(tabs) {
      tabs.forEach(function(tab) {
        console.log(liste)

       //collect all of the urls here, I will just log them instead
      liste.insertAdjacentHTML("afterend",
          `<div class="card m-3">
            <div class="card-header">
              ${tab.title} <img src="${tab.favIconUrl}" alt="">
            </div>
            <div class="card-body">
              <a href="${tab.url}" class="btn btn-primary">Open</a>
            </div>
          </div>`);
      });
    });
