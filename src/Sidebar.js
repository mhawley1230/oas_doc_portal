import React from 'react';

const Sidebar = props => {
    let organizationConfig = props.organizationConfig

    return (
        <div className="side-bar">
            <header className ="side-bar-header">
                <h1>{organizationConfig.displayName}</h1>
            </header>
            <div className="side-bar-body">
                <h3>API DOCS</h3>
            </div>
        </div>
    )
}

export default Sidebar;