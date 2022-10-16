import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../HomeScreenPostSummaryList/index.js";
import postList from "./PostList.js";
(function ($) {
    $('#wd-explore').append(`
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
                ${postList()}
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                ${PostSummaryList()}
            </div>
        </div>
    `);

})($);