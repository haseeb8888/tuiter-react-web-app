const NavigationSidebar = (active) => {
    return(`
            <div class="row">
                <div class="list-group  wd-list-group col-xxl-12 col-xl-12 col-lg-11">
                    <div class="list-group-item"><i class="fab fa-twitter wd-font-color"></i><br/></div>
                    <div class="list-group-item ${active==='home'?'active':''}">
                        <a href="../HomeScreen/explore.html">
                            <div class="row">
                                <i class="fa fa-home wd-font-color col-xxl-2 col-xl-2"></i>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span class="wd-font-color">Home</span></div>
                            </div>
                        </a>
                    </div>
                    <div class="list-group-item ${active==='explore'?'active':''}">
                        <a href="../explore/index.html">
                            <div class="row">
                                <i class="fa fa-hashtag fa-inverse col-xxl-2 col-xl-2"></i>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span class="wd-font-color">Explore</span></div>
                            </div>
                        <a href="#">
                    </div>
                    <div class="list-group-item ${active==='notifications'?'active':''}" style="border-top-width: 0px">
                        <a href="#">
                            <div class="row">
                                <i class="fa fa-bell col-xxl-2 col-xl-2 wd-font-color"></i>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span class="wd-font-color">Notifications</span></div>
                            </div>
                        </a>
                    </div>
                    <div class="list-group-item ${active==='messages'?'active':''}">
                        <a href="#">
                            <div class="row">
                                <i class="fa fa-envelope wd-font-color col-xxl-2 col-xl-2"></i>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span class="wd-font-color">Messages</span></div>
                            </div>
                        </a>
                    </div>
                    <div class="list-group-item ${active==='bookmarks'?'active':''}">
                        <a href="#">
                            <div class="row">
                                <i class="fa fa-bookmark wd-font-color col-xxl-2 col-xl-2"></i>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span class="wd-font-color">Bookmarks</span></div>
                            </div>
                        </a>
                    </div>
                    <div class="list-group-item ${active==='lists'?'active':''}">
                        <a href="#">
                            <div class="row">
                                <i class="fa fa-list wd-font-color col-xxl-2 col-xl-2"></i>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span class="wd-font-color">Lists</span></div>
                            </div>
                        </a>
                    </div>
                    <div class="list-group-item ${active==='profile'?'active':''}">
                        <a href="#">
                            <div class="row">
                                <i class="fa fa-user wd-font-color col-xxl-2 col-xl-2"></i>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span class="wd-font-color">Profile</span></div>
                            </div>
                        </a>
                    </div>
                        <div class="list-group-item ps-1 ${active==='more'?'active':''}">
                            <a href="#">
                         <span class="fa-stack fa-1x">
                             <i class="fa fa-circle fa-stack-1x fa-inverse"></i>
                             <i class="fa fa-ellipsis fa-stack-1x"></i>
                        </span>
                            <span class="position-absolute d-none d-xl-block wd-font-color" style="left: 35px; top: 11px">More</span>
                    </a>
                    </div>
                </div>
            </div>
            <div class="row ps-0 pr-2">
                <div class="btn btn-primary col-xxl-12 col-xl-12  mt-2  wd-button-bg wd-rounded-buttons" style="width: 95%">Tuit</div>
            </div>
    `);
}
export default NavigationSidebar;