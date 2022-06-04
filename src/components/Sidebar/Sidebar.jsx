import { NavLink } from 'react-router-dom';
import c from './Sidebar.module.css'

const Sidebar = () => {
	return (	
    <div className={c.sidebar}>
      <ul className={c.list}>
        <li><NavLink to="/profile" className = { navData => navData.isActive ? c.active : null }>Profile</NavLink> </li>
        <li><NavLink to="/dialogs" className = { navData => navData.isActive ? c.active : null }>Messages</NavLink></li>
        <li><NavLink to="/music" className = { navData => navData.isActive ? c.active : null }>Music</NavLink></li>
        <li><NavLink to="/users" className = { navData => navData.isActive ? c.active : null }>Users</NavLink></li>
        <li><NavLink to="/settings" className = { navData => navData.isActive ? c.active : null }>Settings</NavLink></li>
        </ul>
    </div>
	)
}

export default Sidebar;