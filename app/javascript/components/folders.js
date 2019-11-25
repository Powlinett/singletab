const toto = document.querySelector('#toto');
let selectionparent = document.querySelector("#recherches")
let selection = document.querySelector("#recherches")
let divRecherche = ""
let divRechid = 0
let folderparent = ""
let cardstexte = ""

if (toto) {
  const data = JSON.parse(toto.dataset.folders);
  const datatabs = JSON.parse(toto.dataset.tabs);
  let i = 0;
  do {
    console.log(boucle(data));
    i += 1
  } while (i <= data.length);
  console.log(datatabs)
  datatabs.forEach(function(tabs){
    tabs.forEach(function(tab){
      cardstexte = texttab(tab)
      selectionparent = document.querySelector(`#idfolder-${tab.folder_id}`);
      selectionparent.insertAdjacentHTML("afterend", cardstexte);
    })
  })
}

function boucle(data) {
  data.forEach(function(folder){
  // test si folder dans la pages
  selectionparent = document.querySelector(`#idfolder-${folder.id}`);
  if (selectionparent === null) {   //folder non present?
    selectionparent = document.querySelector(`#idfolder-${folder.parent_id}`);
    if (folder.parent_id === null) { //folder sans parent?
      divtexte = textdiv(folder);
      selection.insertAdjacentHTML("afterend", divtexte);
      return 1
    } else if (selectionparent !== null) { //folder parent present?
      divtexte = textdiv(folder);
      selectionparent.insertAdjacentHTML("beforeend", divtexte);
      return 1
    }
  }
  return 0

});
}


function textdiv(folder) {
  divtexte = `<h3>name :  ${folder.name} id : ${folder.id} PID: ${folder.parent_id}
     <div class="notification-actions">
       <a class="fas fa-edit" href="/folders/${folder.id}/edit"></a>
     </div>
  </h3>
  <div class="border border-secondary  row" id="idfolder-${folder.id}">
  </div>`
return divtexte;
};

function texttab(tab) {
tabtexte = `<div class="notification col-6 col-sm-3">
      <img src='${tab.icon}' class="avatar-large" />
    <div class="notification-content">
      <p><small>${ tab.name }</small></p>
      <p>${ tab.title }</p>
    </div>
    <div class="notification-actions">
      <a class="fas fa-search" href="/tabs/${tab.id}"></a>
      <a data-confirm="Are you sure?" class="far fa-trash-alt" rel="nofollow" data-method="delete" href="/tabs/${tab.id}"></a>
    </div>`
  return tabtexte;
};
