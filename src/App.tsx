import React, { useState, useEffect, FunctionComponent } from "react";
import CardList from './components/CardList';
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRobots } from "./store";

interface RootState {
    robots: Array<Robot>
}

// const filteredRobots = (robots: Array<Robot>, search: string) => robots.filter(
//     (user) => {
//         console.log('Filter running')
//         return user.name.toLowerCase().includes(search.toLowerCase())
//     })

const App: FunctionComponent = (): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const [isFetching, setIsFetcthing] = useState<null | boolean>(null);
    const selector = (state: RootState): Array<Robot> => state.robots;
    const robotusers = useSelector(selector);
    const [filteredRobots, setFilteredRobots] = useState<Array<Robot>>(robotusers)
    console.log("Robousers ", robotusers)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect dispatch running')
        setIsFetcthing(true)
        dispatch<any>(fetchRobots()).then(() => setIsFetcthing(false));
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
            <main className="tc" style={{
                background: "linear-gradient(to right, rgba(7,27,82,1) 0%, rgba(0,128,128,1), 100%)"
            }}>
                <Header setSearch={setSearch} title="Robofriends" />
                <CardList robots={filteredRobots} />
            </main>

        </>
    )
}

export default App;