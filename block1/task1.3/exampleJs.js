function doSomethingGreat(name) {
    alert('Do something Great was called');
}
function customAlert(message) {
    alert(message);
}

document.addEventListener('DOMContentLoaded', () => {
    let myButton = document.getElementById('MyButton');
    let myButton2 = document.getElementById('MyButton2');
    let myButton3 = document.getElementById('MyButton3');
    let myButton4 = document.getElementById('MyButton4');
    let myButton5 = document.getElementById('MyButton5');
    let myButton6 = document.getElementById('MyButton6');
    myButton.onclick = function () { alert('Hallo button'); }
    myButton2.onclick = () => doSomethingGreat;
    myButton3.onclick = () => customAlert("HUHHH");
    myButton4.onclick = () => customAlert("Wowza");
    myButton5.onclick = () => customAlert("this is insane");
    myButton6.onclick = () => customAlert("The final one");
})
