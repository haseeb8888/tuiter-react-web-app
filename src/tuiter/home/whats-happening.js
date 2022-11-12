import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {createTuitThunk}
    from "../../services/tuits-thunks";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
            const newTuit = {
                tuit: whatsHappening
            }
            if(newTuit.tuit!=='') {
                dispatch(createTuitThunk(newTuit));
            }
        
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="https://e7.pngegg.com/pngimages/865/893/png-clipart-black-nasa-text-nasa-insignia-logo-nasa-graphics-standards-manual-decal-nasa-logo-angle-text-thumbnail.png" className="rounded-circle" width={60}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;