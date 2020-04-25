// Here we do some refactoring
import React, { useContext } from 'react';
import {AuthContext} from '../../Context/authContext'
import { withRouter } from 'react-router-dom'
import './header.style.css'

const styles = {
  active:
    "absolute font-normal dropdown shadow overflow-hidden rounded w-48 border mt-2 py-1 right-0 z-20",
  hidden: 'hidden',
};

const Dropdown = ({active, links, setToggle, history}) => {
  return (
    <ul className={active ? styles.active : styles.hidden}>
      {links.map(link => (
        <List
          title={link.title}
          setActive={setToggle}
          redirectPath={link.path}
          Svg={link.Svg}
          extra={link.extra}
          history={history}
        />
      ))}
    </ul>
  );
};

const List = ({ setActive, redirectPath, title, Svg, extra , history}) => {
  // const [redirect, setRedirect] = useState(false) 
  
  const context = useContext(AuthContext);

  const handleClick = () => {
    setActive(false);
    // setRedirect(true)
    if (title === "Logout") {
        context.logout()
        history.push("/")
    }

  };  


  return (
    <li class="hover:bg-gray-500" onClick={handleClick}>
      <div class="flex items-center p-2 border-b">
        <div class="">
          <Svg />
        </div>
        <div class="ml-2">{title} </div>
        {extra ? <div class="ml-5 text-xs text-green-600"> {extra}</div> : null}
      </div>
    </li>
  );
};
export default withRouter(Dropdown);
