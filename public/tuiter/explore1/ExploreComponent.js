import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11 ps-0">
                    <div class="input-group">
                         <div class="input-group-text wd-rounded-buttons wd-zero-right-border px-2" style="background-color: white"><span style="border-right: 1px solid white">&#128269;</span></div>
                        <input type="text" class="form-control wd-rounded-buttons wd-search-bar-color" placeholder="Search Twitter" id="twitterSearch">
                    </div>
                </div>
                <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <i class="fa fa-cog fa-2x position-relative wd-foreground-text" style="top: 3px; color: rgb(41,159,214)"></i>
                </div>
            </div>
            <div class="row">
                <ul class="nav nav-tabs my-2 ps-0 wd-nav-bg-border">
                    <li class="nav-item active">
                        <a class="nav-link wd-nav-item" href="../for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-item" href="../trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-item" href="../news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-item" href="../sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link wd-nav-item" href="../entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div class="row mb-3">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="img-fluid wd-image-borders col px-0 ">
            </div>
            <span class="position-relative wd-overlay-name">SpaceX's Starship</span>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;