const liste = document.getElementById('listeonglets');
    console.log(liste)
    liste.insertAdjacentHTML("afterend", "<li>Anakin</li>");

  chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(onglet){
      onglet.tabs.forEach(function(x){
       //collect all of the urls here, I will just log them instead
      liste.insertAdjacentHTML("afterend",
          `<div class="card m-3">
            <div class="card-header">
              ${x.title} <img src="${x.favIconUrl}" alt="">
            </div>
            <div class="card-body">
              <a href="${x.url}" class="btn btn-primary">Open</a>
            </div>
          </div>`);
      });
    });
  });
