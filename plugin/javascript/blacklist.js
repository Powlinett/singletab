const blacklistedSitesArray = []

fetch(ROOT_URL + "/blacklisted_sites")
.then((response) => { return response.json() })
.then ((data) => {
  data.forEach( (site) => {
    blacklistedSitesArray.push(site['domain_name']);
  })
});

function removeTabs(tabs, blacklist) {
  blacklist.forEach((domainName) => {
    tabs.forEach(function(tab, index) {
      if (tab.url.includes(domainName)) {
        tabs.splice(index, 1);
      }
    });
  });
};
