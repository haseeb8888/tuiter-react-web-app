import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuitItem";

const TuitList = () => {
    const tuitArray = useSelector(state => state.tuits);
    return(
        <ul className="list-group">
            {
                tuitArray.map(tuits =>
                    <TuitItem
                        key={tuits._id} tuits={tuits}/>
                )
            }
        </ul>
    );
};
export default TuitList;