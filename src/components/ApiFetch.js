import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiFetch = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios
            .get("https://sleepy-journey-90647.herokuapp.com/", {
                mode: "cors",
            })
            .then((res) => {
                setPosts(res.data.items);
            });
    },[])
    return (
        <div>
            <h2>沖縄料理屋をAPIで取ってきてみた</h2>
            <ul>
                {posts.map((post) => (
                    <li> {post.name} </li>
                ))}
            </ul>
            <div>Gs academy test at Vercel_</div>
        </div>
    );
};

export default ApiFetch;
