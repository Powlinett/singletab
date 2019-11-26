const fold = document.querySelector('#fold');
let selectionParent = document.querySelector("#recherches")
let selection = document.querySelector("#recherches")
let divRecherche = ""
let divRechid = 0
let folderParent = ""
let cardsTexte = ""

if (fold) {
  const data = JSON.parse(fold.dataset.folders);
  const dataTabs = JSON.parse(fold.dataset.tabs);
  let i = 0;
  do {
    console.log(boucle(data));
    i += 1
  } while (i <= data.length);
  console.log(dataTabs)
  dataTabs.forEach(function(tabs){
    tabs.forEach(function(tab){
      cardsTexte = textTab(tab)
      selectionParent = document.querySelector(`#idfolder-${tab.folder_id}`);
      selectionParent.insertAdjacentHTML("beforeend", cardsTexte);
    })
  })
}

function boucle(data) {
  data.forEach(function(folder){
  // test si folder dans la page
  selectionParent = document.querySelector(`#idfolder-${folder.id}`);
  if (selectionParent === null) {   //folder non present?
    selectionParent = document.querySelector(`#idfolder-${folder.parent_id}`);
    if (folder.parent_id === null) { //folder sans parent?
      divText = textDiv(folder);
      selection.insertAdjacentHTML("afterend", divText);
      return 1
    } else if (selectionParent !== null) { //folder parent present?
      divText = textDiv(folder);
      selectionParent.insertAdjacentHTML("beforeend", divText);
      return 1
    }
  }
  return 0
});
}



function textDiv(folder) {
  divText = `<h3>name :  ${folder.name}
             <div class="notification-actions">
               <a class="fas fa-edit" href="/folders/${folder.id}/edit"></a>
               <a class="fas fa-chart-bar ml-3" href="/visualisation/${folder.id}"></a>
             </div>
             </h3>
             <div class="cards-container" id="idfolder-${folder.id}"></div>`
return divText;
};


function textTab(tab) {
tabText = `<div class="tab-card">
             <img src='${tab.icon}' class="icon-tab" />
             <div class="tab-card-content">
               <a href="${ tab.url }" class="tab-link">
                 <p class='tab-name'>${ tab.name }</p>
                 <p class='tab-title'>${ tab.title }</p>
               </a>
             </div>
             <div class="tab-card-actions">
             <a data-confirm="Are you sure?" class="delete-icon fas fa-times" rel="nofollow" data-method="delete" href="/tabs/${tab.id}"></a>
             </div>
           </div>`
  return tabText;
};

