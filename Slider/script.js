var rangeElement = document.querySelector('input[type="range"]');

var rangeValue = function(){
    var newValue = rangeElement.value;
    var target = document.querySelector('.value');
    target.innerHTML = newValue;
}

rangeElement.addEventListener("input", rangeValue);