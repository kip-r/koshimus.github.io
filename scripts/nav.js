const menu_button = document.getElementById('menu_button');
const link_holder = document.querySelector('.link-holder');

menu_button.addEventListener('click', () => {
    link_holder.classList.toggle('active');  /*This allows for the header choices to appear only when the user wants them to*/
});