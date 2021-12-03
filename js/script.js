// 3.12.2021
{
    const body = document.getElementsByTagName('body')[0]

    const navWrapper = document.createElement('div')
    navWrapper.id = 'nav-wrapper'

    body.append(navWrapper)

    const navButtonClose = document.createElement('div')
    navButtonClose.id = 'nav-button-close'

    const nav = document.getElementById('nav')
    nav.append(navButtonClose)

    document.getElementById('search-button').addEventListener('click', showMenu)

    document.getElementById('nav-button').addEventListener('click', showMenu)

    navWrapper.addEventListener('click', hideMenu)

    navButtonClose.addEventListener('click', hideMenu)

    function showMenu(){

        nav.classList.add('active')
        navWrapper.classList.add('active')
        body.classList.add('fixed')
    }

    function hideMenu(){

        nav.classList.remove('active')
        navWrapper.classList.remove('active')
        body.classList.remove('fixed')
    }

}