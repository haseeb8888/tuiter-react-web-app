const NavigationSidebar = () => {
    return(`
    <ul class="list-group">
      <li class="list-group-item list-group-item-action">
        <i class="fab fa-twitter">
        </i>
      </li>
      <li class="list-group-item list-group-item-action">
        <i class="fas fa-home">
        </i>
        <span class="d-none d-xxl-inline d-xl-inline">
          Home
        </span>
      </li>
      <li class="list-group-item list-group-item-action active">
        <i class="fas fa-hashtag">
        </i>
        <span class="d-none d-xxl-inline d-xl-inline">
          Explore
        </span>
      </li>
      <li class="list-group-item list-group-item-action">
        <i class="fas fa-bell">
        </i>
        <span class="d-none d-xxl-inline d-xl-inline">
          Notifications
        </span>
      </li>
      <li class="list-group-item list-group-item-action">
        <i class="fas fa-envelope">
        </i>
        <span class="d-none d-xxl-inline d-xl-inline">
          Messages
        </span>
      </li>
      <li class="list-group-item list-group-item-action">
        <i class="fas fa-bookmark">
        </i>
        <span class="d-none d-xxl-inline d-xl-inline">
          Bookmarks
        </span>
      </li>
      <li class="list-group-item list-group-item-action">
        <i class="fas fa-list">
        </i>
        <span class="d-none d-xxl-inline d-xl-inline">
          Lists
        </span>
      </li>
      <li class="list-group-item list-group-item-action">
        <i class="fas fa-user">
        </i>
        <span class="d-none d-xxl-inline d-xl-inline">
          Profile
        </span>
      </li>
      <li class="list-group-item list-group-item-action">
        <span class="fa-stack wd-override-more">
          <i class="fas fa-circle fa-stack-2x">
          </i>
          <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse wd-dots">
          </i>
        </span>
        <span class="d-none d-xxl-inline d-xl-inline">
          More
        </span>
      </li>
    </ul>
    <button class="btn btn-primary wd-override-tweet-btn">
      Tuit
    </button>
  `)
}

export default NavigationSidebar;