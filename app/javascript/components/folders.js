// const fold = document.querySelector('#fold');
const pagesindex = document.querySelector('#pagesindex');
// let selectionParent = document.querySelector("#recherches")
// let selection = document.querySelector("#recherches")
// let divRecherche = ""
// let divRechid = 0
// let folderParent = ""
// let cardsTexte = ""

// code pour ouvrire tbs dans le show folder/id
// if (showfold) {
//   const datafoldertabs = JSON.parse(showfold.dataset.tabs);
//   document.querySelectorAll("a.openAllLink").forEach((btn) => {
//      btn.addEventListener("click", (event) => {
//         datafoldertabs.forEach(element =>
//             window.open(element.url)
//         )
//       });
//   });
// }
//open all tabs

if (pagesindex) {

    // console.log(dataTabs)
  document.querySelectorAll('a.open-tabs').forEach((link) => {
    link.addEventListener('click', (event) => {
    const foldertabs = JSON.parse(link.dataset.tabs);
        foldertabs.forEach(function(tabs){
          console.log(tabs.url);
          window.open(tab.url);
        })
      })
    });
  };

//open all tabs fin




// code pour inserer folder et tabs si multi folder et tabs
// if (fold) { //code se lance si dans pages des folders
//   const data = JSON.parse(fold.dataset.folders);
//   const dataTabs = JSON.parse(fold.dataset.tabs);
//   let i = 0;
//   do {
//     (boucle(data));
//     i += 1
//   } while (i <= data.length);
//   dataTabs.forEach(function(tabs){
//     tabs.forEach(function(tab){
//       cardsTexte = textTab(tab)
//       selectionParent = document.querySelector(`#idfolder-${tab.folder_id}`);
//       selectionParent.insertAdjacentHTML("beforeend", cardsTexte);
//     })
//   })
//   openalltabs(dataTabs);
// }



// function boucle(data) {
//   data.forEach(function(folder){
//   // test si folder dans la page
//   selectionParent = document.querySelector(`#idfolder-${folder.id}`);
//   if (selectionParent === null) {   //folder non present?
//     selectionParent = document.querySelector(`#idfolder-${folder.parent_id}`);
//     if (folder.parent_id === null) { //folder sans parent?
//       divText = textDiv(folder);
//       selection.insertAdjacentHTML("afterend", divText);
//       return 1
//     } else if (selectionParent !== null) { //folder parent present?
//       divText = textDiv(folder);
//       selectionParent.insertAdjacentHTML("beforeend", divText);
//       return 1
//     }
//   }
//   return 0
// });
// }

//  //ouvre tout les tabs
// // <a href="<%= tab.url %>" class="fas fa-external-link-alt open-tabs" data-tabs="<%= folder.to_json %>">Open</a>


// function textDiv(folder) {

//   divText = `<h3>${folder.name}
//      <div class="notification-actions">
//        <a class="fas fa-edit" href="/folders/${folder.id}/edit"></a>
//        <a class="fas fa-chart-bar ml-3" href="/visualisation/${folder.id}"></a>
//        <a href="" class="fas fa-external-link-alt open-tabs" data-tabs="${folder.id}">Open All</a>
//      </div>
//   </h3>
//   <div class="cards-container" id="idfolder-${folder.id}">
//   </div>`

// return divText;
// };


// function textTab(tab) {
// tabText = `<div class="tab-card">
//              <img src='${tab.icon}' class="icon-tab" />
//              <div class="tab-card-content">
//                <a href="${ tab.url }" class="tab-link">
//                  <p class='tab-name'>${ tab.name }</p>
//                  <p class='tab-title'>${ tab.title }</p>
//                </a>
//              </div>
//              <div class="tab-card-actions">
//              <a data-confirm="Are you sure?" class="delete-icon fas fa-times" rel="nofollow" data-method="delete" href="/tabs/${tab.id}"></a>
//              </div>
//            </div>`
//   return tabText;
// };
