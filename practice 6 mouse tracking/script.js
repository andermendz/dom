const trail = document.querySelector('.trail')
window.addEventListener('mousemove',(e)=>{

    console.log(`Mouse is at X ${e.pageX} and Y ${e.pageY}`);
    trail.setAttribute('style',`display:flex; margin-left: ${e.pageX}px;
                                             margin-top: ${e.pageY}px;
`)


})