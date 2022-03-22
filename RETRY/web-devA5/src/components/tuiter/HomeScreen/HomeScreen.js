
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";
import React from "react";
import NavigationSidebar from "../NavigationSideBar";

const HomeScreen = () => {
    return (
        <div className="row">
            <div className="col-lg-2 col-md-1 col-2">
                <NavigationSidebar activeItem = "Home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-6">
                <span className="wd-search "><i className="fa fa-search"/></span>
                <div className="input-group mb-6">
                    <input type="search" className="form-control rounded-pill wd-padded-left" placeholder="Search Twitter"
                           aria-label="Search"
                           aria-describedby="search-addon"/>
                    <i className="fa fa-cog fa-2x"/>
                </div>


                <ul className="nav nav-tabs mt-6">
                    <li className="nav-item">
                        <a className="nav-link active" href="for-you.html"><span className="wd-nav-text-selected">For you</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="trending.html"><span className="wd-nav-text">Trending</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><span className="wd-nav-text">News</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><span className="wd-nav-text">Sports</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><span className="wd-nav-text-vanish">Entertainment</span></a>
                    </li>
                </ul>
                <PostList/>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
                <PostSummaryList/>
            </div>
        </div>
    )
};
export default HomeScreen;