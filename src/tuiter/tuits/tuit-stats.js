import React from "react";

const TuitStats = ({tuits}) => {
    const liked = tuits.liked ? "red":" ";
    const heartIcon = tuits.liked? 'fa-heart':'fa-heart-o';
    return (
        <div className="row mt-2 ms-5">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className='fa fa-comment-o wd-gray-color'></i>
                <span className='ms-1 wd-gray-color'>{tuits.replies}</span>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className='fa fa-retweet wd-gray-color'></i>
                <span className='ms-1 wd-gray-color'>{tuits.retuits}</span>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className={`fa ${heartIcon} wd-gray-color'`} style={{color: liked}}></i>
                <span className='ms-1 wd-gray-color'>{tuits.likes}</span>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <i className='fa fa-share-alt wd-gray-color'></i>

            </div>
        </div>
    );
}

export default TuitStats;