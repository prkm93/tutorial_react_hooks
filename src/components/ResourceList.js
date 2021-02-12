import React from 'react';
import useResources from './useResources';


const ResourcesList = ({resourceName}) => {

  const resources = useResources(resourceName);

  return (
    <ul>
      {
        Array.isArray(resources) ? 
        resources.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
            </li>
          )
        })  : null
      }
    </ul>
  )
}

export default ResourcesList;
