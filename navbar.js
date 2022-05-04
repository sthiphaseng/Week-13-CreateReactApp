import React from "react";

export default class NavBar extends React.Component {
    render() {
        return ( 
            <nav className = "navbar navbar-expand-lg navbar-dark bg-primary">
                <div class = "collapse navbar-collapse" id = "navbarNavAltMarkup">
                    <div class = "navbar-nav">
                     <a className = "nav-item nav-link active" href = "#">NBA Home</a >
                     <a className = "nav-item nav-link" href = "#">Playoff Bracket</a>
                     <a className = "nav-item nav-link" href = "#">West Teams</a>
                     <a className = "nav-item nav-link" href = "#">East Teams</a>
                    </div>
                </div>
            </nav>
        );
    }
}