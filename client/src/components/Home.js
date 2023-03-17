import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import NavBar from './NavBar';
import News from './News'
import ReservationCard from './ReservationCard'

export default function Home({updateUser, user}) {
    const navigate = useNavigate();
    const [res, setRes] = useState([])

    useEffect(() => {
        setRes(user.reservations_today)
    }, [])
    console.log(res)

    const resTodayCardsList = res.map(res =>
        <ReservationCard
            key={res.id}
            res={res}
        />
    )

    // console.log(user)

    // try to to today's reservations
    return (
        user !== null ?
            <>
                <NavBar updateUser={updateUser}/>
                <h1>Home</h1>
                <h2>Today's Reservations</h2>
                {resTodayCardsList}
                <h3>^add reservations here</h3>
                <News/>
            </>
            :
            <div className="not-loggedin">
                <p>You are not logged in!</p>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/signup')}>Signup</button>
            </div>
            // to get the above to show, comment the logic out in App.js with if(!user). not sure how to get the same message to appear on all of the pages without copy/pasting
    )
}
