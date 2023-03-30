let inputGuppi = document.getElementById('1'),
    inputAllprice1 = document.getElementById('11');

inputGuppi.addEventListener('input' , () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'applicaton/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputAllprice1.value = inputGuppi.value * data.guppi;
        } else {
            inputAllprice1.value = "что то пошло не так!";
        }
    })
})