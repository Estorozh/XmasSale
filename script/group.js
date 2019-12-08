let importantInfo = document.getElementsByClassName('importantInfo');

for (let i=0; i<importantInfo.length; i++) {
  importantInfo[i].addEventListener('click',showImportantInfo);
}
function showImportantInfo(event) {
  let importantInfo_describe = event.target.parentElement.parentElement.nextElementSibling.lastElementChild;
  importantInfo_describe.classList.toggle('hidden');
  importantInfo_describe.firstElementChild.addEventListener('click',closeImportantInfo);
  
}
function closeImportantInfo(event) {
  event.target.parentElement.classList.toggle('hidden');
}
