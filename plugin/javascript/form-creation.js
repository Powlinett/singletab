const folderSelection = document.querySelector('#select-folder');

function createResearchForm() {
  let folderOption = document.querySelector('#choices-single-default');
  folderSelection.method = "POST";
  folderSelection.action = ROOT_URL + "/tabs";
  fetch(ROOT_URL + "/folders/folders_name")
    .then((response) => { return response.json() })
    .then(data => {
      data.forEach(folder => {
        const option = document.createElement("option");
        option.value = folder['id'];
        option.innerText = folder['name'];
        folderOption.appendChild(option)
      });
    });
};
