import React from "react";
import parse from 'html-react-parser'
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuits}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <img src={tuits.image} alt="img" className="rounded-circle" width="50px" height="50px" />
                </div>
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 p-0" style={{marginLeft:"-30px"}}>
                    <span className="fw-bolder">{tuits.userName}</span>
                    <i className="fa fa-check-circle ms-1"></i>
                    <span className="text-secondary ms-2">{tuits.handle}&nbsp;.&nbsp;{tuits.time}</span>
                    <i className="bi bi-x-lg float-end" style={{"cursor": "pointer"}}
                       onClick={() => deleteTuitHandler(tuits._id)}></i><br />
                    <span className="wd-font-color">{parse(`${tuits.tuit}` )}</span>
                </div>
            </div>
            <TuitStats key={tuits._id} tuits={tuits}/>
        </div>
    );
}

export default TuitItem;