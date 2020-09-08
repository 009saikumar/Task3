var request = new XMLHttpRequest;
//var url = "https://restcountries.eu/rest/v2/all";
var url = "https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
request.open('GET',url,true);
request.send();
request.onload = function(){
    var arr = this.response;
    console.log(arr);
}