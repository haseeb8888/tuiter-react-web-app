const PostSummaryItem = (post) => {
    return(`
           <div class="list-group-item position-relative row p-0" style="bottom: 60px">
            <div class="row">
                        <div class="col-xxl-10 col-xl-8 col-lg-8 col-sm-8">
                            <span class="wd-gray-color">${post.topic}</span><br>
                            <span class="font-weight-bold wd-font-color" >${post.userName}</span>
                            <i class="fas fa-check-circle wd-verified"></i>
                            <span class="wd-gray-color" >&nbsp;-${post.time}</span><br>
                            <span class="font-weight-bold wd-font-color">${post.title}</span>
                        </div>
                        <div class="m-xxl-0 col-xxl-2 col-xl-2 offset-xl-2 col-lg-2  offset-lg-2 col-md-2 offset-md-2 col-sm-3 offset-sm-1 my-auto ">
                            <div class="card my-auto" style="width: 5em">
                                <img src="${post.image}" class="card-img-top my-auto">
                            </div>
                        </div>
                    </div>
                    </div>
            `);
}

export default PostSummaryItem;