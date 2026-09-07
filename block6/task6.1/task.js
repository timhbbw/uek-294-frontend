
const form = document.forms.signup;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const prenameelement = form.elements.prename;
    const prename = prenameelement.value;

    let datetime = new Date();
    const currenthour = datetime.getHours();

    if (currenthour >= 5 && currenthour < 11) {
        alert('Guten Morgen ' + prename);
    } else if (currenthour >= 11 && currenthour < 18) {
        alert('Guten Tag ' + prename);
    } else if (currenthour >= 18 && currenthour < 22) {
        alert('Guten Abend ' + prename);
    } else {
        alert('Gute Nacht ' + prename);
    }

    console.log(prename);
    console.log(currenthour);
});
