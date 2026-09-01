let addmore = document.getElementById('addmore');
let removealbum = document.getElementById('remfirst');
addmore.addEventListener('click', addmorealbums);
removealbum.addEventListener('click', removefirstalbums);
let releases = document.getElementsByClassName('releases-content')[0];

function createalbum() {
    const newalbum = document.createElement('div');
    newalbum.className = 'releases-release';

    const cover = document.createElement('img');
    cover.src = 'https://loremflickr.com/480/480/cd,album,cover?random=';

    newalbum.append(cover);
    return newalbum;
}

function addmorealbums() {
    releases.append(createalbum());
    releases.append(createalbum());
    releases.append(createalbum());
}

function removefirstalbums() {
    let albums = document.getElementsByClassName('releases-release');
    for (let i = 0; i < 3; i++) {
        if (albums.length > 0) {
            albums[0].remove();
        }
    }
}
