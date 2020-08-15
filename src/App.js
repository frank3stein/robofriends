import React, { useState, useEffect } from "react";
import CardList from './components/CardList';
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRobots } from "./store/actions";

const filteredRobots = (robots, search) => robots.filter(
    (user) => {
        console.log('Filter running')
        return user.name.toLowerCase().includes(search.toLowerCase())
    })

export default () => {
    const [search, setSearch] = useState('');
    const [isFetching, setIsFetcthing] = useState(null);
    const robotusers = useSelector(state => state.robots);
    const [filteredRobots, setFilteredRobots] = useState(robotusers)
    console.log("Robousers ", robotusers)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect dispatch running')
        setIsFetcthing(true)
        dispatch(fetchRobots()).then(() => setIsFetcthing(false));
    }, [dispatch])

    useEffect(() => {
        setFilteredRobots(robotusers.filter(
            (user) => {
                console.log('Filter running')
                return user.name.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, robotusers])
    return (
        <>
            <main className="tc" >
                <Header setSearch={setSearch} title="Robofriends" />
                <CardList robots={filteredRobots(robotusers, search)} />
            </main>

        </>
    )
}