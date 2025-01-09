import { NavLink } from 'react-router';


function MyButton({ to, title }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "font-semibold underline  py-4 px-8" : "py-4 px-8"
            }
        >
            {title}
        </NavLink>
    );
}

export default MyButton;