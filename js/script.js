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

    // open
    document.getElementById('search-button').addEventListener('click', () => {

        nav.classList.add('active')
        navWrapper.classList.add('active')
        body.classList.add('fixed')
        document.querySelector('#nav input[type=search]').classList.add('active')      
    })

    document.getElementById('nav-button').addEventListener('click', () => {

        nav.classList.add('active')
        navWrapper.classList.add('active')
        body.classList.add('fixed')        
    })

    document.getElementById('nav-menu').addEventListener('click', event => {

        event.preventDefault()

        nav.classList.add('active')
        navWrapper.classList.add('active')

        document.body.scrollTop = document.documentElement.scrollTop = 0 
    })

    document.getElementById('nav-search').addEventListener('click', event => {

        event.preventDefault()  

        nav.classList.add('active')
        navWrapper.classList.add('active')

        document.querySelector('#nav input[type=search]').classList.add('active')

        document.body.scrollTop = document.documentElement.scrollTop = 500
    })

    // close
    navWrapper.addEventListener('click', () => {

        nav.classList.remove('active')
        navWrapper.classList.remove('active')
        body.classList.remove('fixed')

        document.querySelector('#nav input[type=search]').classList.remove('active')

        document.body.scrollTop = document.documentElement.scrollTop = 0 
    })

    navButtonClose.addEventListener('click', () => {

        nav.classList.remove('active')
        navWrapper.classList.remove('active')
        body.classList.remove('fixed')

        document.querySelector('#nav input[type=search]').classList.remove('active')

        document.body.scrollTop = document.documentElement.scrollTop = 0
    })

    document.addEventListener('keydown', event => {

        if(event.key === 'Escape' || event.code === 'Escape'){

            nav.classList.remove('active')
            navWrapper.classList.remove('active')
            body.classList.remove('fixed')

            document.querySelector('#nav input[type=search]').classList.remove('active')
        }
    })
}