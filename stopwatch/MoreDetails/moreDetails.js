window.onload = function () {
    function getQueryParameters(name){
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    const hours = getQueryParameters("hours");
    const minutes = getQueryParameters("minutes");
    const seconds = getQueryParameters("seconds");
    const tens = getQueryParameters("tens");
    const lapNumver = getQueryParameters("lapNumber");
}