// const fold = document.querySelector('#fold');
const pagesindex = document.querySelector('#pagesindex');

document.querySelector("[data-tabs='<%= @folder %>']").remove()


if (pagesindex) {
    // open all tabs
  document.querySelectorAll('a.open-tabs').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(1)
      const foldertabs = JSON.parse(link.dataset.tabs);
        foldertabs.forEach(function(tabs){
          window.open(tabs.url);
        })
    })
  });

  // supprimer div des folders
  // document.querySelectorAll('a.btnremove').forEach((link) => {
  //   link.addEventListener('click', (event) => {
  //     const folder = link.dataset.folderid;
  //     console.log(folder)
  //     const divfolder = document.querySelector(`#div-folder-${folder}`);
  //     console.log(divfolder)
  //     divfolder.remove();
  //   })
  // })
};

