import { NavLink } from 'react-router';


function MyButton({ to, title }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "font-semibold underline" : ""
            }
        >
            {title}
        </NavLink>
    );
}

export default MyButton;