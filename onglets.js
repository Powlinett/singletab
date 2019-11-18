const liste = document.getElementById('listeonglets');
    console.log(liste)
    liste.insertAdjacentHTML("afterend", "<li>Anakin</li>");

  chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(onglet){
      onglet.tabs.forEach(function(x){
       //collect all of the urls here, I will just log them instead
      liste.insertAdjacentHTML("afterend", `<li>Titre : ${x.title} </li><a href=${x.url}>${x.url}</a>`);

     console.log(x.url);
     console.log(x);
      });
    });
  });
