const toggleMenu = () => {
    let menuList = document.querySelector('.menu');
    let search = document.querySelector('.search');
    if (menuList.style.display == 'none' || !menuList.style.display) {
        menuList.style.display = 'flex';
        search.style.display = 'flex';
        document.querySelector('.bar').style.display = 'none'
        document.querySelector('.x').style.display = 'inline-block'
        return
    }
    menuList.style.display = 'none';
    search.style.display = 'none';
    document.querySelector('.bar').style.display = 'inline-block'
    document.querySelector('.x').style.display = 'none'
}
window.addEventListener("resize", () => {
    var w = document.documentElement.clientWidth;
    console.log(w)
    if (w < 850) {
        document.querySelector('.search').style.display = 'none'
        document.querySelector('.menu').style.display = 'none'
        document.querySelector('.bar').style.display = 'inline-block'
        document.querySelector('.x').style.display = 'none'
    } else {
        document.querySelector('.search').style.display = 'flex'
        document.querySelector('.menu').style.display = 'flex'
        document.querySelector('.x').style.display = 'none'
        document.querySelector('.bar').style.display = 'none'

    }
})