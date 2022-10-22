import HomePostSummaryItem from "./homePostsSummaryItem"
import posts from "./post.json";

const HomeComponent = () => {
    return (
        <>
            <div className="list-group wd-post-list-group">
                {
                    posts.map(post => {
                        return (<HomePostSummaryItem posts={post}/>);
                    })
                }
            </div>
        </>
    );
}

export default HomeComponent;