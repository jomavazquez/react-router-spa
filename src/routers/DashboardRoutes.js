import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <Switch>
                    <Route exact path="https://jomavazquez.github.io/react-router-spa/marvel" component={ MarvelScreen } />
                    <Route exact path="https://jomavazquez.github.io/react-router-spa/hero/:heroid" component={ HeroScreen } />
                    <Route exact path="https://jomavazquez.github.io/react-router-spa/dc" component={ DcScreen } />
                    <Route exact path="https://jomavazquez.github.io/react-router-spa/search" component={ SearchScreen } />

                    <Redirect to="https://jomavazquez.github.io/react-router-spa/marvel" />
                </Switch>
            </div>
        </>
    )
}