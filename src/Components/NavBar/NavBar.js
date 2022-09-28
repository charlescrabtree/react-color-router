import { NavLink, useParams } from 'react-router-dom';

export default function NavBar() {
  const { r, g, b } = useParams();
  const currentColor = `rgb(${r},${g},${b})`;

  return (
    <div className='navbar' style={{ '--currentColor': currentColor }}>
      <NavLink to="/rgb/40/84/75" className="navlink">
      Dark Slate Gray
      </NavLink>

      <NavLink to="/rgb/172/189/134" className={navlink}>
      Sage
      </NavLink>

      <NavLink to="/rgb/255/160/111" className={navlink}>

      </NavLink>
    </div>
  );
}
