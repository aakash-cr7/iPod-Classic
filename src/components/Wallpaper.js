import React from 'react';

class Wallpaper extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="music">
                <h2>Wallpaper Select</h2>
                <ul>
                    {["Earth","Jupiter","Moon"].map((element,index)=>{
                        return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
                    })}
                </ul>
            </div>

        )
    }

}

export default Wallpaper;