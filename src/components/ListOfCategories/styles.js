// Estilos de los Componentes
import styled , {css} from 'styled-components'
import {rebot} from '../../styles/animation'

export const List = styled.ul`
    display:flex;
    overflow: hidden;
    width: 100%;
    cursor:pointer;
    margin-bottom:10px;
    &:hover{
        overflow:scroll;
    }

    //-------------------------------------------------------------------------------------------------------------------------
    //usamos una funcion que va a recibir las props
    //va a evaluar si tenemos una prop llamada fixed
    //importamos css
    //de esta manera manejamos si las listas estan fijas con styled-component sin usar un classname dentro del elemtno html
    // && -> si se cumple la condicion entra 
    ${props => props.fixed && css`
        {
            ${rebot()}
            background: #fff;
            border-radius:50px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            left:0;
            margin 0 auto;
            max-width:400px;
            padding:5px;
            position:fixed;
            right:0;
            top: -10px;
            //vamos a hacer que las categorias se vean un poquito mas pequeña con scale
            transform: scale(.7);
            //para que quede encima de lo demas
            z-index:1;
        }
    `}
`

export const Item = styled.li`
    padding: 0 8px;
`
