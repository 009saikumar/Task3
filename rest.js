var request = new XMLHttpRequest;
var url = "https://restcountries.eu/rest/v2/all";
request.open('GET',url,true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
}