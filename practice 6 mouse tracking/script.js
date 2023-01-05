const trail = document.querySelector('.trail')
window.addEventListener('mousemove',(e)=>{

    console.log(`Mouse is at X ${e.pageX} and Y ${e.pageY}`);
    trail.setAttribute('style',`width: ${e.pageX}px; height: ${e.pageY}px`)


})