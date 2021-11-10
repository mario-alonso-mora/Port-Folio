import React from 'react';
import './NavBar.css';

const NavBar = () => {

    // Hacer el efecto scroll
    const [active, setActive] = React.useState('');

    const handleScroll = () => {
        const y = window.scrollY;
        if( y < 20){
            setActive('')
        }else{
            setActive('active')
        }
    };

    window.addEventListener('scroll', handleScroll)

    // Nav Bar responsive
    const [nav, setNav] = React.useState(false)

    const handleClick = () => {

        if(!nav){
            setNav(true)
        }else{
            setNav(false)
        }
    }


    return (
        <div className= {`navBar ${active} actResponsive`} >
            <div className={!nav ? ("listOne"):("listOneResponsive")}>
                <ul className={ !nav ? (`listOneUl`):(`listOneUlResponsive`)}>
                    <li><div ><a href="#inicio">INICIO</a></div></li>
                    <li><div ><a href="#body">CONOCEME</a></div></li>
                    <li><div ><a href="#footer">PORTFOLIO</a></div></li>
                    <li><div ><a href="#body">HABILIDADES</a></div></li>
                   
                </ul>
            </div>
            <div className="listTwo">
                <ul className="listTwoUl">
                    <li><a href="https://github.com/mario-alonso-mora"><i class="fab fa-github"></i></a></li>
                    <li><a href="https://wa.me/651584574"><i class="fab fa-whatsapp"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/mario-alonso-mora"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>

            <h1 className="navName">"Mario Alonso"</h1>
           {
               !nav  ? ( <i className="fas fa-bars icon" onClick={handleClick}></i>):(<i class="fas fa-times icon" onClick={handleClick}></i>)
           }
        </div>
    )
}

export default NavBar;