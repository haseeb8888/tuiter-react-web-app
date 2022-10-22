import React from "react";
import parse from 'html-react-parser'

const HomePostsSummaryItem = ({posts}) =>{

    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <img src={posts.image} alt="img" className="rounded-circle" width="50px" height="50px" />
                </div>
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 p-0" style={{marginLeft:"-30px"}}>
                    <span className="wd-font-color">{posts.username}</span>
                    <i className="fa fa-circle-check ms-1"></i>
                    <span className="wd-gray-color ms-2">{posts.handle}&nbsp;.&nbsp;{posts.timeframe}</span><br />
                    <span className="wd-font-color">{parse(`${posts.content}` )}</span>
                </div>
            </div>
            <div className="row mt-3">
                <div className={`card mx-auto wd-card-bg p-0 ${posts.cardTitle?'wd-card-border':''}`} id="c1" style={{"width": "30rem"}}>
                    <img src={posts.cardImage} className="card-img-top m-0 p-1" alt="..." style={{"borderRadius": "0px"}} />
                    {posts.cardTitle?
                     <div className={`card-body p-3 ${posts.cardTitle?'wd-card-title-border':''}`} id="c2">
                         <h5 className="card-title wd-font-color">{posts.cardTitle}</h5>
                         <p className="card-text wd-gray-color">{parse(`${posts.cardBody}`)}</p>
                     </div>:''}
                </div>
            </div>
            <div className="row mt-2 ms-5">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <i className='fa fa-comment wd-gray-color'></i>
                    <span className='ms-1 wd-gray-color'>{posts.commentNumber}</span>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <i className='fa fa-share-alt wd-gray-color'></i>
                    <span className='ms-1 wd-gray-color'>{posts.shareNumber}</span>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <i className='fa fa-heart wd-gray-color'></i>
                    <span className='ms-1 wd-gray-color'>{posts.heartNumber}</span>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <i className='fa fa-download wd-gray-color'></i>

                </div>
            </div>
        </div>
    );
}

export default HomePostsSummaryItem;