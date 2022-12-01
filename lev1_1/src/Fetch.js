
import React, { useEffect, useState } from 'react';

function DataDisplayer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-11-01&sortBy=publishedAt&apiKey=bcf5e54edb6345d4ad69e833166fa908`)
            .then((response) => response.json())
            .then((data1) => {
                setData(data1.articles);
                console.log(data1);
            });
    }, [])    ;





return (
    <div className="users">
        {data.map((user) => (
            <div className="user"><img src={user.urlToImage} alt="asd"></img>{user.title}<br></br><br></br>{user.description} 
            <button><a href={user.url}>REad More</a></button>
            </div>
        ))}
    </div>
);
} 









export default DataDisplayer;
