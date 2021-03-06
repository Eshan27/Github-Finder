import React from 'react'

function UserItem(props) {
   
        const {login, avatar_url, html_url}=props.user;
        return (
           <div className='card text-center'>
               <img 
               src={avatar_url} 
               alt="" 
               style={{width:"80px"}}
               className='round-img'>
               </img>

            <h3>{login}</h3>

            <div>
                <a href={html_url} className="btn btn-dark btn-sm my1">More</a>
            </div>
           </div>   
        )
        
}

export default UserItem

