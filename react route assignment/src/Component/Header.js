import React from 'react'

import { Link } from 'react-router-dom'


class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='App'>

                <div className='header' >
                    <div className='heading'>
                        <h1>
                            Component Lifecycle
                        </h1>
                    </div>
                    <div className='navigation'>
                        <Link to = '/mounting'>
                            <button>Mounting</button>
                        </Link>
                        <Link to ='/updating'>
                            <button>Updating</button>
                        </Link>
                        <Link to ='/unmounting'>
                            <button>Unmounting</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }


}

export default Header;
