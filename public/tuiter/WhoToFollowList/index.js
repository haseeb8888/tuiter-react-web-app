import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <div class="list-group wd-list-group">
                <div class="list-group-item">
                    <div class="row">
                        <span class="wd-font-white">Who to follow</span>
                    </div>
                </div>
                    ${
        who.map(w=>{
            return WhoToFollowListItem(w);
        }).join('')
    }
            </div>
`); }

export default WhoToFollowList;