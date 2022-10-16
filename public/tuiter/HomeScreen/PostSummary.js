const PostSummary = (posts) =>{

    return(`
                <div class="list-group-item">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                            <img src="${posts.image}" class="wd-rounded-images" width="50px" height="50px">
                        </div>
                        <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 p-0 post-about">
                            <span class="wd-font-color">${posts.username}</span>
                            <i class="fas fa-check-circle wd-verified"></i>
                            <span class="wd-gray-color">${posts.handle}&nbsp; -  ${posts.timeframe}</span><br>
                            <span class="wd-font-color">${posts.content}</span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="card mx-auto wd-card-bg p-0 ${posts.cardTitle?'wd-card-border':''}" id="c1" style="width: 30rem;">
                            <img src="${posts.cardImage}" class="card-img-top m-0 p-1" alt="..." style="border-radius: 0px">
                            ${posts.cardTitle?`
                            <div class="card-body p-3 ${posts.cardTitle?'wd-card-title-border':''}" id="c2">
                                <h5 class="card-title wd-font-color ">${posts.cardTitle}</h5>
                                <p class="card-text wd-gray-color">${posts.cardBody}</p>
                            </div>`:''}
                        </div>
                    </div>
                    <div class="row mt-2 ms-5">
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <i class='far fa-comment wd-gray-color'>&nbsp;${posts.commentNumber}</i>
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <i class='fa fa-share-alt wd-gray-color'>&nbsp;${posts.shareNumber}</i>
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <i class='fa fa-heart wd-gray-color'>&nbsp;${posts.heartNumber}</i>
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <i class='fa fa-download wd-gray-color'></i>
                    </div>
                    </div>
                </div>
            `);
}

export default PostSummary;