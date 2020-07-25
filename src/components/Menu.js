import React from 'react';
import "../css/Menu.css"
import game from "../static/game.jpg"
import music from "../static/music.jpg"
import settings from "../static/settings.png"
import ipod from "../static/ipod.jpg"
class Menu extends React.Component {
    render() {
        const { active,menuItems} = this.props;
        return (

            <div className="menu-container">
                <div className="menu">
                    <ul>
                        {menuItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li key={index}>&nbsp;{element}</li>
                        })}
                    </ul>
                </div>
                <div className="leaf">
                    {active === 0 && <img className="leaf-img" src={ipod}></img>}
                    {active === 1 && <img className="leaf-img" src={music}></img>}
                    {active === 2 && <img className="leaf-img" src={game}></img>}
                    {active === 3 && <img className="leaf-img" src={settings}></img>}
                </div>
            </div>
        )
    }
}


export default Menu;