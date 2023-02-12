const wrapper = document.querySelector(".wrapper")
genrateBtn = document.querySelector(".form button")

genrateBtn.addEventListiner("click", ()=>{
    wrapper.classList.add("active")
})