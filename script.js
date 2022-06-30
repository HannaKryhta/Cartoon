const searchInput=document.querySelector('#search');
const divs=document.querySelectorAll('.cartoon');

searchInput.addEventListener('keyup', function(event){
const world=event.target.value.toLowerCase();
 
divs.forEach(item =>{
    item.querySelector('p').textContent.toLowerCase().includes(world)? (item.style.display='block'):(item.style.display='none');
})


})
