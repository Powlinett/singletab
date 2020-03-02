// const fold = document.querySelector('#fold');
const pagesindex = document.querySelector('#pagesindex');
const tabModal = document.querySelector('.background-tab-modal');
const folderModal = document.querySelector('.background-folder-modal');
const buttonYesTab = document.querySelector('.yes-btn-tab');
const buttonYesFolder = document.querySelector('.yes-btn-folder');
const buttonNo = document.querySelector('.no-btn');


if (pagesindex) {
    // open all tabs
  document.querySelectorAll('a.open-tabs').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const foldertabs = JSON.parse(link.dataset.tabs);
        foldertabs.forEach(function(tabs){
          window.open(tabs.url);
        })
    })
  });



  // supprimer div des folders
  document.querySelectorAll('.btnremove').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const folder = link.dataset.folderid;
      console.log(folder)
      folderModal.style.display = "flex";
      buttonYesFolder.innerHTML = `<a class="btn-yes confirm-delete" data-folderid="${folder}" data-remote="true" rel="nofollow" data-method="delete" href="/folders/${folder}">Yes</a>`;
      buttonYesFolder.addEventListener('click', (event) => {
        event.preventDefault();
        folderModal.style.display = "none";
      })
      buttonNo.addEventListener('click', (event) => {
        folderModal.style.display = "none";
      })
      folderModal.addEventListener('click', (event) => {
        folderModal.style.display = "none";
      })
    });
  });


  // supprimer onglets
  document.querySelectorAll('.delete-icon').forEach((icon) => {
    icon.addEventListener('click', (event) => {
      event.preventDefault();
      const tab = icon.dataset.tabid;
      tabModal.style.display = "flex";
      buttonYesTab.innerHTML = `<a class="btn-yes confirm-delete" data-tabid="${tab}" data-remote="true" rel="nofollow" data-method="delete" href="/tabs/${tab}">Yes</a>`;
      buttonYesTab.addEventListener('click', (event) => {
        event.preventDefault();
        tabModal.style.display = "none";
      })
      buttonNo.addEventListener('click', (event) => {
        tabModal.style.display = "none";
      })
      tabModal.addEventListener('click', (event) => {
        tabModal.style.display = "none";
      })
    });
  });
};

// if (document.querySelector('.blacklisted_sites')) {
//   document.querySelectorAll('.delete-icon').forEach((icon) => {
//     icon.addEventListener('click', (event) => {
//       const blacklistedSite = icon.dataset.blacklistid;
//       console.log(blacklistedSite);
//     });
//   });
// };
