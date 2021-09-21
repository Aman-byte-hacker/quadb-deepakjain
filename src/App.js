import React from 'react'
import { Home } from './Component/home'
import './App.css'
import Summary from './Component/Summary'
import { Switch, Route } from 'react-router-dom'
const App = () => {
    return ( <
        >
        <
        Switch >
        <
        Route exact path = "/" >
        <
        Home / >
        <
        /Route>{' '} <
        Route path = "/summary" > { ' ' } <
        Summary / >
        <
        /Route>{' '} <
        /Switch>{' '} <
        />
    )
}
export default App