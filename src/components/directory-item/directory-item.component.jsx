import { React } from "react";
import {useNavigate} from 'react-router-dom'
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `shop/${category.title}`; 
    navigate(path);
  }
  return (
      <div className="directory-item-container" onClick={routeChange}>
       
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${category.imageUrl})`,
          }}
        />
        <div className="body">
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
        
      </div>
 
  );
};
export default DirectoryItem;
