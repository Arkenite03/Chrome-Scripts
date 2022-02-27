// remove suggestion videos at the end
for(element of 
document.getElementsByClassName('ytp-ce-element')) {
element.style.display = 'none'; } 

// print all titles of playlist 
console.log(Array.from(document.querySelectorAll('.ytd-playlist-video-list-renderer #video-title')).map((el) => {return el.textContent.trim()}).join("\n"))

// print all titles of playlist sorted 
console.log(Array.from(document.querySelectorAll('.ytd-playlist-video-list-renderer #video-title')).map((el) => {return el.textContent.trim()}).sort().join("\n"))
