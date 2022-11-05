import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <Link to="#" className="list-group-item">Tuiter</Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <Link to="/tuiter/home"
                  className={`list-group-item list-group-item-action ${active === 'home' || active ==='' ? 'active'
                                                                                         : ''}`}>
                <i className="fa fa-home col-xxl-2 col-xl-2"></i>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action
                    ${active === 'explore' ? 'active' : ''}`}>
                <i className="fa fa-hashtag col-xxl-2 col-xl-2 "></i>
                Explore
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action
                    ${active === 'notifications' ? 'active' : ''}`}>
                <i className="fa fa-bell col-xxl-2 col-xl-2"></i>
                Notifications
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action
                    ${active === 'messages' ? 'active' : ''}`}>
                <i className="fa fa-envelope col-xxl-2 col-xl-2"></i>
                Messages
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="fa fa-bookmark col-xxl-2 col-xl-2"></i>
                Bookmarks
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action
                    ${active === 'lists' ? 'active' : ''}`}>
                <i className="fa fa-list col-xxl-2 col-xl-2"></i>
                Lists
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item list-group-item-action
                    ${active === 'profile' ? 'active' : active ==='edit-profile' ? 'active' : ''}`}>
                <i className="fa fa-user col-xxl-2 col-xl-2"></i>
                Profile
            </Link>
            <Link to="#" className={`list-group-item list-group-item-action
                    ${active === 'more' ? 'active' : ''}`}>
                <i className="fa fa-circle col-xxl-2 col-xl-2"></i>
                More
            </Link>
        </div>
    );
};
export default NavigationSidebar;