import {
  Outlet,
} from 'react-router';
import {
  NavLink,
} from 'react-router-dom';

export default function Layout() {
  return <>
    <header>
      <ul>
        <NavLink className="dark-gray" to="/rgb/40/84/75">
            Dark Slate Gray
        </NavLink>
        <NavLink className="sage" to="/rgb/172/189/134">
            Sage
        </NavLink>
        <NavLink className="caramel" to="/rgb/255/160/111">
            Caramel
        </NavLink>
      </ul>
    </header>
    <Outlet />
  </>;
}
