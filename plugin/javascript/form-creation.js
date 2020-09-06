function createResearchForm() {
  const folderSelection = document.querySelector('#select-folder');
  let folderOption = document.querySelector('#choices-single-default');
  if (folderSelection) {
    folderSelection.method = "POST";
    folderSelection.action = ROOT_URL + "/tabs";
    fetch(ROOT_URL + "/folders/folders_name")
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then(data => {
        data.forEach(folder => {
          const option = document.createElement("option");
          option.value = folder['id'];
          option.innerText = folder['name'];
          folderOption.appendChild(option)
        });
      });
  }
};
