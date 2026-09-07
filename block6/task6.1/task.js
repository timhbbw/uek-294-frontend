let username = prompt('Whats Your Name?');

let datetime = new Date();
const currenthour = datetime.getHours();

if (currenthour >= 5 && currenthour < 11) {
    alert('Guten Morgen ' + username);
} else if (currenthour >= 11 && currenthour < 18) {
    alert('Guten Tag ' + username);
} else if (currenthour >= 18 && currenthour < 22) {
    alert('Guten Abend ' + username);
} else {
    alert('Gute Nacht ' + username);
}

console.log(username);
console.log(currenthour);
