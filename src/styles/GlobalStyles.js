// para poder usar los estilos de forma global
import { createGlobalStyle } from 'styled-components'

// componente global para toda la app
export const GlobalStyle = createGlobalStyle`

    //-> Para toda la conf HTML , usa la fuente por defecto del sistema operativo
    html {
        box-sizing: border-box;
        font-family: -apple-system, 
        BlinkMacSystemFont, 
        'Segoe UI',
        Roboto, 
        Oxygen, 
        Ubuntu, 
        Cantarell, 
        'Open Sans', 
        'Helvetica Neue', 
        sans-serif;
    }

    //->Todos los elementos utilicen el border box
    *, *:before, *:after {
        box-sizing: inherit;
    }

    //receteamos los demas elementos para que no tenga margen ni ningun estilo por defecto
    ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
    ul { list-style: none; }
    button { background: transparent; border: 0; outline: 0 }

    body {
        background: #fefefe;
        height: 100vh;
        //centrando el body
        margin: 0 auto;
        max-width: 500px;
        //evita que haga rebotes la app con el scroll
        overscroll-behavior: none;
        width: 100%; 
    }


    #app {
        box-shadow: 0 0 10px rgba(0, 0, 0, .05);
        overflow-x: hidden;
        //la altura minima
        min-height: 100vh;
        padding-bottom: 10px;
    }
`
