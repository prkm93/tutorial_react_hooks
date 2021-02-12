import React from 'react'
import useResources from './useResources';

function Users({comments}) {

    const commentsList = useResources(comments);
     
    return (
        <ul>
            {
                Array.isArray(commentsList) ?
                commentsList.map((comment) => {
                    return (
                        <li key={comment.id}>
                           {comment.email} : {comment.body}
                        </li>
                    )
                }) : null
            }        
        </ul>
    )
}

export default Users
