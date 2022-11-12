import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuits}) => {
    const liked = tuits.liked ? "red" : " ";
    const heartIcon = tuits.liked ? 'fa-heart' : 'fa-heart-o';
    const dispatch = useDispatch();
    return (
        <div className="row mt-2 ms-5">
            <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <i className='fa fa-comment-o wd-gray-color'></i>
                <span className='ms-1 wd-gray-color'>{tuits.replies}</span>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <i className='fa fa-retweet wd-gray-color'></i>
                <span className='ms-1 wd-gray-color'>{tuits.retuits}</span>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <i className={`fa ${heartIcon} wd-gray-color'`}
                   onClick={() => dispatch(updateTuitThunk({
                                                               ...tuits,
                                                               likes: tuits.likes + 1,
                       liked: true
                                                           }))
                   } style={{color: liked, "cursor": "pointer"}}></i>
                <span className='ms-1 wd-gray-color'>{tuits.likes}</span>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <i className='fa fa-thumbs-down wd-gray-color'
                   onClick={() => dispatch(updateTuitThunk({
                                                               ...tuits,
                                                               dislikes: tuits.dislikes + 1
                                                           }))
                   } style={{"cursor": "pointer"}}></i>
                <span className='ms-1 wd-gray-color'>{tuits.dislikes}</span>
            </div>
            <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <i className='fa fa-share-alt wd-gray-color'></i>

            </div>
        </div>
    );
}

export default TuitStats;