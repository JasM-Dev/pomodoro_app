import styled from 'styled-components'

const StyledSettingsModal = styled.div`
position: absolute;
z-index: 10;
left: 0;
top: 0; 
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,.5);

.modal_container{
    background-color: var(--color_white);
    margin: 48px auto 0 auto;
    border-radius: 15px;
    width: 87.2%;
    @media(min-width: 760px){
        width: 540px;
    }
    @media(min-width: 1400px){
        width: 490px;
    }
}


`

export default StyledSettingsModal;