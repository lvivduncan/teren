// 3.12.2021 -- 15-12-2021

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// клік на кнопку меню має відкривати ліву панель, клік на пошук теж ліву панель але з врахування відступу + підсвітити поле пошуку; //
// і закривати праву панель, якщо вона відкрита                                                                                      //
//                                                                                                                                   //
// клік на кнопку "надіслати новину" повинен відкривати праву панель і закривати ліву, якщо вона відкрита                            //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

{
    const body = document.getElementsByTagName('body')[0]

    const bodyWrapper = document.createElement('div')
    bodyWrapper.id = 'body-wrapper'

    body.append(bodyWrapper)

    // хрестик для лівої панелі
    const navButtonClose = document.createElement('div')
    navButtonClose.id = 'nav-button-close'

    const nav = document.getElementById('nav')
    nav.append(navButtonClose)

    // хрестик для правої панелі
    const sendButtonClose = document.createElement('div')
    sendButtonClose.id = 'send-button-close'

    const sendPost = document.getElementById('send-post')
    sendPost.append(sendButtonClose)

    // клік на кнопку пошуку
    document.getElementById('search-button').addEventListener('click', () => {

        nav.classList.add('active')
        bodyWrapper.classList.add('active')
        body.classList.add('fixed')
        document.querySelector('#nav input[type=search]').classList.add('active')      
    })

    // клік на кнопку меню
    document.getElementById('nav-button').addEventListener('click', () => {

        nav.classList.add('active')
        bodyWrapper.classList.add('active')
        body.classList.add('fixed')        
    })

    // клік на кнопку мобільного меню
    document.getElementById('nav-menu').addEventListener('click', event => {

        event.preventDefault()

        nav.classList.add('active')
        bodyWrapper.classList.add('active')

        document.body.scrollTop = document.documentElement.scrollTop = 0 
    })

    // клік на кнопку мобільного пошуку
    document.getElementById('nav-search').addEventListener('click', event => {

        event.preventDefault()  

        nav.classList.add('active')
        bodyWrapper.classList.add('active')

        document.querySelector('#nav input[type=search]').classList.add('active')

        document.body.scrollTop = document.documentElement.scrollTop = 500
    })

    // клік на кнопку мобільного надсилання новини
    document.getElementById('nav-send').addEventListener('click', event => {

        event.preventDefault()

        bodyWrapper.classList.add('active')
        sendPost.className = 'active'

        document.body.scrollTop = document.documentElement.scrollTop = 0 
    })
    
    // клік на одну з двох кнопок "надіслати новину"
    document.querySelectorAll('.send-post').forEach(item => {

        item.addEventListener('click', () => {

            bodyWrapper.classList.add('active')
            sendPost.className = 'active'

            nav.classList.remove('active')

            document.body.scrollTop = document.documentElement.scrollTop = 0
        })
    })

    // клік на врапері -- любе місце на екрані, ну майже любе =)
    bodyWrapper.addEventListener('click', () => {

        nav.classList.remove('active')
        bodyWrapper.classList.remove('active')
        body.classList.remove('fixed')

        document.querySelector('#nav input[type=search]').classList.remove('active')

        sendPost.className = ''

        document.body.scrollTop = document.documentElement.scrollTop = 0 
    })

    // клік на хрестик, ліва панель
    navButtonClose.addEventListener('click', () => {

        nav.classList.remove('active')
        bodyWrapper.classList.remove('active')
        body.classList.remove('fixed')

        document.querySelector('#nav input[type=search]').classList.remove('active')

        document.body.scrollTop = document.documentElement.scrollTop = 0
    })

    // клік на хрестик, права панель
    sendButtonClose.addEventListener('click', () => {

        nav.classList.remove('active')
        bodyWrapper.classList.remove('active')
        body.classList.remove('fixed')

        document.querySelector('#nav input[type=search]').classList.remove('active')

        sendPost.className = ''
    })

    // натиск на ескейп
    document.addEventListener('keydown', event => {

        if(event.key === 'Escape' || event.code === 'Escape'){

            nav.classList.remove('active')
            bodyWrapper.classList.remove('active')
            body.classList.remove('fixed')

            document.querySelector('#nav input[type=search]').classList.remove('active')

            sendPost.className = ''
        }
    })
}

{
    // https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
    const inputs = document.querySelectorAll( 'input[type=file]' )

    Array.prototype.forEach.call( inputs, function( input ){
        const label	 = input.nextElementSibling,
              labelVal = label.innerHTML

        input.addEventListener( 'change', function( event )
        {
            let fileName = ''

            if( this.files && this.files.length > 1 ){

                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length )
            } else {

                fileName = event.target.value.split( '\\' ).pop()
            }

            if( fileName ){

                label.querySelector( 'span' ).innerHTML = fileName
            } else {

                label.innerHTML = labelVal
            }
        })

        // Firefox bug fix
        input.addEventListener( 'focus', function(){ 

            input.classList.add( 'has-focus' )
        })

        input.addEventListener( 'blur', function(){ 

            input.classList.remove( 'has-focus' )
        })
    })
}