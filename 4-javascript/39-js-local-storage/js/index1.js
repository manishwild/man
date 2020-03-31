window.onload = function () {
    let lastBrowseDate = localStorage.getItem('browseDate')
    //console.log(lastBrowseDate);
    if (lastBrowseDate) {
        document.querySelector('#browserDateElement').innerText = lastBrowseDate

    }
}