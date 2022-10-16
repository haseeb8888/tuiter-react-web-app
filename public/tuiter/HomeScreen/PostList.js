import PostSummaryList from "./PostSummary.js"
import posts from "./posts.js";
const PostList = () => {
    const res=`
    <div class="list-group wd-post-list-group">
        ${posts.map(p=>{
        return PostSummaryList(p);
    }).join('')
    }
    </div>
    `
    return res;
}

export default PostList;