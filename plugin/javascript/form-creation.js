const folderSelection = document.querySelector('#select-folder');

function createResearchForm() {
  const folderOption = document.querySelector('#choices-single-default');
  folderSelection.method = "POST";
  folderSelection.action = urlsitetabs;
  fetch(urlsitefolders)
    .then((response) => { return response.json() })
    .then(data => {
      data.forEach(folder => {
        const option = document.createElement("option");
        option.value = folder['id'];
        option.innerText = folder['name'];
        folderOption.appendChild(option)
      });
    });
   setTimeout(() => { choices = new Choices(folderOption) }, 100);
};

createResearchForm();
