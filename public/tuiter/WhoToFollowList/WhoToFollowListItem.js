const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
      <div class="wd-follow-logo">
        <img src="${who.avatarIcon}" class="wd-follow-logo"/>
      </div>
      <button class="btn btn-primary wd-override-follow">
        Follow
      </button>
      <div>
        ${who.userName}
        <span class="fa-stack wd-override-check">
          <i class="fas fa-circle fa-stack-2x">
          </i>
          <i class="fas fa-check fa-stack-1x wd-check-mark">
          </i>
        </span>
      </div>
      <div>
        @${who.handle}
      </div class="text-muted fw-normal wd-handle">
    </li>
    `);
}

export default WhoToFollowListItem;