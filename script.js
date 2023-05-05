const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".dangnhap");
const registerLink = document.querySelector(".dangki");


loginLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

registerLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})