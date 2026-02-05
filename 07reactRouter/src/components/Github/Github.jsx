import React, { useEffect ,useState} from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
       
        fetch('https://api.github.com/users/titikshalaad')
        .then(response => response.json())
        .then(data =>{
         
           setData(data);
        })
    },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text'>Github followers:{data.followers}
        <img className="w-20 "src={data.avatar_url} alt="Git picture" />
        </div>
    )
}

export default Github
