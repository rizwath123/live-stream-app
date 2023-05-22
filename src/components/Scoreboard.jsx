// import React, { useState, useEffect } from 'react';

const Scoreboard = () => {
    // const [score, setScore] = useState('');

    // useEffect(() => {
        // fetch('https://api.cricapi.com/v1/currentMatches?apikey=4f8ad48c-3b56-41ce-b529-c72e2602b23e&offset=0')
    //         .then(response => {
    //             // response.json()
    //             console.log(response)
    //         })
    //         // .then(data => setScore(data.score))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <div className="scoreboard">
            <h2>Live Score:</h2>
            {/* <p>{score}</p> */}
        </div>
    );
};

export default Scoreboard;
