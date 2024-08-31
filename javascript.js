function showSidebar(){
    event.preventDefault(); 
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop, // Позиция элемента
              behavior: 'smooth' // Плавная прокрутка
          });
      }
  });
});




window.onload = function() {

  setTimeout(function(){
    var preloader = document.getElementById('page-preloader')
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done'); 
    }
  }, 1000)
}