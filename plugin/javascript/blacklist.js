function removeTabs(tabs) {
  const blacklistArray = []

  fetch(ROOT_URL + "/blacklisted_sites")
    .then((response) => { return response.json() })
    .then ((data) => {
      data.forEach((site) => {
        blacklistArray.push(site['domain_name']);
      });

      for (var i = 0, len = blacklistArray.length; i < len; i++) {
        tabs.forEach((tab, index) => {
          if (tab['url'].includes(blacklistArray[i])) {
            tabs.splice(index, 1);
          }
        });
      };
      return tabs;
    });
};
