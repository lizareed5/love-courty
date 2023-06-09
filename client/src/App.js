import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import BrowseParks from './components/BrowseParks';
import ParkPage from './components/ParkPage';
import ProfilePage from './components/ProfilePage';
import MyReservations from './components/MyReservations';
import EditProfile from './components/EditProfile';

function App() {
  const [parkId, setParkId] = useState()
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      } else {
        setUser(null)
      }
    });
  }, []);

  const updateUser = (user) => setUser(user)
  console.log(user)

  if(!user) return (
    <>
        <Routes>
          <Route
            path="/"
            element={<LandingPage updateUser={updateUser}/>}
          />
          <Route
            path="/login"
            element={<Login updateUser={updateUser}/>}
          />
          <Route
            path="/signup"
            element={<Signup updateUser={updateUser}/>}
          />
        </Routes>
    </>
  )
  //fix errors
  if(errors) return <h1>{errors}</h1>

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<LandingPage updateUser={updateUser}/>}
        />
        <Route
          path="/login"
          element={<Login updateUser={updateUser}/>}
        />
        <Route
          path="/signup"
          element={<Signup updateUser={updateUser}/>}
        />
        <Route
          path="/home"
          element={<Home updateUser={updateUser} user={user} setParkId={setParkId}/>}
        />
        <Route
          path="/parks"
          element={<BrowseParks updateUser={updateUser} setParkId={setParkId}/>}
        />
        <Route
          path="/parks/:id"
          element={<ParkPage updateUser={updateUser} user={user} parkId={parkId} />}
        />
        <Route
          exact path="/profile"
          // path={"/profile/${user.id}"}
          element={<ProfilePage updateUser={updateUser} user={user}/>}
        />
        <Route
          path="/profile/reservations"
          element={<MyReservations updateUser={updateUser} setUser={setUser} user={user}
          // resToday={resToday} resFuture={resFuture} resPast={resPast}
          />}
        />
        <Route
          path="/profile/edit"
          element={<EditProfile updateUser={updateUser} user={user}/>}
        />
      </Routes>
    </div>
  );
}

export default App;