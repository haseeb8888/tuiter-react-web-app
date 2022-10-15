import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return(`
    <i class="fas fa-search wd-override-search-icon">
    </i>
    <input class="wd-override-search" type="text" placeholder="Search Tuiter"/>
    <span class="fa-2x">
      <a href="#">
         <i class="fas fa-cog text-primary wd-override-gear">
         </i>
      </a>
    </span>
    <ul class="nav nav-tabs wd-navbar">
      <li class="nav-item">
        <a class="nav-link active" href="../for-you.html">For you</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="../entertainment.html">
          <span class="d-none d-md-inline d-lg-inline">
            Entertainment
          </span>
        </a>
      </li>
    </ul>
    <div class="card">
      <img class="img-fluid wd-spacex-override" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
      <div class="card-img-overlay">
        <h2 class="fw-bold wd-picture-caption">
          SpaceX's Starship
        </h2>
      </div>
    </div>
    ${PostSummaryList()}
  `)
}

export default ExploreComponent;