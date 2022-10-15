const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
      <div class="wd-tweets">
        <img src="${post.image}" class="wd-tweet-photos"/>
        <div class="text-muted wd-topic">
          ${post.topic}
        </div>
        <div class="fw-bold wd-account">
          ${post.userName}
          <span class="fa-stack wd-override-check">
              <i class="fas fa-circle fa-stack-2x">
              </i>
              <i class="fas fa-check fa-stack-1x wd-check-mark">
              </i>
           </span>
           <span class="text-muted fw-normal">
              - ${post.time}
           </span>
        </div>
        <div class="fw-bold wd-content">
          ${post.title}
        </div>
        <div class="text-muted wd-tweets">
          ${post.tweets}
        </div>
      </div>
    </li>
  `);
}

export default PostSummaryItem;