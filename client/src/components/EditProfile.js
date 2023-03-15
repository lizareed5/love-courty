import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/profile/:id')
    }

    // state for form --> bring in currentUser state
    const initialState = {
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        phone: '',
        user_image: '',
        password: '',
        tennis_level: '',
        play_preference: '',
        court_preference: '',
        year_started: '',
        bio: ''
    };
    const [formState, setFormState] = useState(initialState);

    // helper functions for input
    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }
    // handle submit with fetch POST request
        const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }

    const handleDeleteClick = () => {
        console.log('deleted')
    }

    return (
        <div>
            <h1>Edit Profile</h1>
            <button onClick={handleBackClick}>back to profile</button>
            <div id="signup-form">
                <form className="form" onSubmit={handleSubmit}>
                    <input name="first_name" type="text" placeholder="first_name" onChange={handleChange}/>
                    <input name="last_name" type="text" placeholder="last_name" onChange={handleChange}/>
                    <input name="email" type="text" placeholder="email" onChange={handleChange}/>
                    {/* <PhoneInput name="phone" placeholder="phone number" defaultCountry="US"
                    value={value} onChange={setValue}
                    /> */}
                    <input name="phone" type="text" placeholder="phone" onChange={handleChange} />
                    <input name="age" type="number" placeholder="age" onChange={handleChange}/>
                    <input name="password" type="password" placeholder="password" onChange={handleChange}/>
                    {/* <p>Profile Picture</p><input name="profile_picture" type="file" placeholder="profile picture"/> */}
                    <input name="user_image" type="text" placeholder="profile picture url" onChange={handleChange}/>
                    <select name="tennis_level" type="select" placeholder="tennis_level" onChange={handleChange}>
                        <option selected disabled hidden>Choose Your Tennis Level</option>
                        <option value="1.0">1.5</option>
                        <option value="1.0">2.0</option>
                        <option value="1.0">2.5</option>
                        <option value="1.0">3.0</option>
                        <option value="1.0">3.5</option>
                        <option value="1.0">4.0</option>
                        <option value="1.0">4.5</option>
                    </select>
                    <select name="play_preference" type="select" placeholder="play_preference" onChange={handleChange}>
                        <option selected disabled hidden>Choose Your Play Preference</option>
                        <option value="Singles">Singles</option>
                        <option value="Doubles">Doubles</option>
                        <option value="Singles and Doubles">Singles and Doubles</option>
                    </select>
                    <select name="court_preference" type="select" placeholder="court_preference" onChange={handleChange}>
                        <option selected disabled hidden>Choose Your Court Preference</option>
                        <option value="hard">hard</option>
                        <option value="clay">clay</option>
                        <option value="grass">grass</option>
                        <option value="hard and clay">hard and clay</option>
                        <option value="hard and grass">hard and grass</option>
                        <option value="clay and grass">clay and grass</option>
                        <option value="all surfaces">all surfaces</option>
                    </select>
                    <input name="year_started" type="number" placeholder="year you started" onChange={handleChange}/>
                    <input name="bio" type="text" placeholder="tell us about yourself" onChange={handleChange}/>
                    <input type="submit" value="save" />
                </form>
                <button onClick={handleDeleteClick}>Delete Account</button>
            </div>
        </div>
    )
}