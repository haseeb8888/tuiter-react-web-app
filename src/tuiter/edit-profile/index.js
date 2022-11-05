import React, {useState} from "react";
import WhoToFollowList from "../who-to-follow-list";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, FormGroup, FormControl} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";
import { useNavigate } from "react-router-dom";

const EditProfileComponent = () => {
    const defaultProfile = useSelector(state => state.profile)
    const [profile, setProfile] = useState(defaultProfile)
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDob] = useState(profile.dateOfBirth);

    function handleNameChange(e) {
            const newName = e.target.value.split(" ")
            setFirstName(newName[0]);
            setLastName(newName[newName.length - 1]);
        const newProfile = {
            ...profile,
            firstName: firstName,
            lastName: lastName
        }
        setProfile(newProfile)
    }

    function handleBioChange(e) {
        const newBio = e.target.value;
        setBio(newBio);
        const newProfile = {
            ...profile,
            bio: newBio
        }
        setProfile(newProfile)
    }

    function handleLocationChange(e) {
        const newLocation = e.target.value;
        setLocation(newLocation);
        const newProfile = {
            ...profile,
            location: newLocation
        }
        setProfile(newProfile)
    }

    function handleWebsiteChange(e) {
        const newWebsite = e.target.value;
        setWebsite(newWebsite);
        const newProfile = {
            ...profile,
            website: newWebsite
        }
        setProfile(newProfile)
    }

    function handleDob(e) {
        const newDob = e.target.value;
        setDob(newDob);
        const newProfile = {
            ...profile,
            dateOfBirth: newDob
        }
        setProfile(newProfile)
    }

    const dispatch = useDispatch();
    const updateProfileHandler = (event) => {
        dispatch(updateProfile({
                                   ...profile,
                                   firstName: firstName,
                                   lastName:lastName,
                                   bio: bio,
                                   location: location,
                                   website: website}));
    }

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `../profile`;
        navigate(path);
    }
    return(
        <>
                <div className="border rounded px-0 py-2">
                    <div className="row px-3">
                        <button className="btn col-1 py-2"
                                onClick={() => routeChange()}><i className="bi bi-x-lg"></i>
                        </button>
                        <div className="col-9 py-2">
                            <div className="fw-bold"> Edit Profile</div>
                        </div>
                        <div className="col-2">
                            <button className="rounded-pill btn btn-dark float-end mb-2 ps-3 pe-3 me-1 fw-bold text-white"
                                    onClick={(event) => {
                                        updateProfileHandler(event);
                                        routeChange()
                                    }}
                            >Save</button>
                        </div>
                    </div>
                    <div>
                        <div className="position-relative">
                            <div className="row wd-banner position-relative d-inline ms-0">
                                <img src={profile.bannerPicture} className="w-100 px-0 mx-0 border-0"></img>
                                <div className="col text-center card-img-overlay align-middle">
                                    <button className="rounded-circle bg-secondary m-50 border-0 bg-opacity-75 mx-1"><i className="bi bi-camera text-white"></i></button>
                                    <button className="rounded-circle bg-secondary m-50 border-0 bg-opacity-75"><i className="bi bi-x-lg text-white"></i></button>
                                </div>

                            </div>
                            <div className="row img-wrapper card-img-overlay top-50 h-100 ms-3 mb-4 position-absolute">
                                <div className="col-2 card-img-overlay mt-5 img-fluid">
                                    <img src={profile.profilePicture} className="h-50 rounded-circle mx-3" style={{width:"150px"}}></img>
                                    <div className="card-img-overlay rounded-circle start-50 pt-1">
                                        <button className="btn rounded-circle bg-secondary border-0 bg-opacity-75 my-4">
                                            <i className="bi bi-camera text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-inline px-3">
                        <form>
                        <div className="form-floating mb-3">
                            <input type="input" className="form-control" id="fullName"
                                   value={firstName + " " + lastName}
                                   onChange={(event) => {
                                       handleNameChange(event)}
                                   }
                            />
                            <label for="fullName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id="bio"
                                   value={bio}
                                   onChange={(event) =>
                                       handleBioChange(event)
                                   }
                            />
                            <label for="bio">Bio</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="input" className="form-control" id="location"
                                   value={location}
                                   onChange={(event) =>
                                       handleLocationChange(event)}
                            />
                            <label for="location">Location</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="input" className="form-control" id="WebSite"
                                   value={website}
                                   onChange={(event) =>
                                       handleWebsiteChange(event)}
                            />
                            <label for="WebSite">Website</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob" className="wd-gray-color">Birth Date</label>
                            <input type="date" id="dob" onChange={(event) => handleDob(event)}
                                   value={new Date(profile.dateOfBirth).toISOString().split("T")[0]} className="form-control"/>
                        </div>
                        </form>
                    </div>
                </div>
        </>
    );
};
export default EditProfileComponent;
