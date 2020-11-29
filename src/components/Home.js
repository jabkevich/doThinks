import React, { Component } from 'react'

import { map } from 'underscore'
import { Link } from "react-router-dom"

const TITLE = 'Домашняя'
const SECTIONS = [
    { title: 'Приёмы', href: '/appointments'},
]

export default class Home extends Component {

    render () {
        return (
            <div className='Home'>
                <div>
                    <div >
                        {map(SECTIONS, ({ href}) => (
                            <Link to={href}>
                              вффввф
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
