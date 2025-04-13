import React, { useEffect, useState } from 'react';


function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/yash-mandali')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div className='text-3xl m-5 p-5 text-center'>
            UserName:: {data.login}<br /><br />
            Followers:: {data.followers}
            {/* <img src={data.avatar_url} alt="Github " /> */}

        </div>
    );
}

export default Github;