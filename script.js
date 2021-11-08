
// puts all panels in a array by using queryAll in a nodes list
const panels = document.querySelectorAll('.panel')
//  expands them when clicked and removes with on another one 
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}