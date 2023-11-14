function findMaxDigit(){
    var formElement = document.getElementById('numberForm');
    var inputElement = formElement.elements['number'];
    var inputValue = inputElement.value;
    if (inputValue.trim() !== "") {
        var maxDigit = Math.max(...inputValue.split('').map(Number));
        document.cookie = 'maxDigit' + this.iterator + '=' + maxDigit + ';';
        this.iterator += 1;
        alert('Maximum digit: ' + maxDigit);
    }
}
function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function getCookie(){
        if(document.cookie !== ''){
        alert(document.cookie + "\nCookies will be deleted after you press OK.");
        deleteAllCookies();
        alert("Cookies deleted.");
    }
}