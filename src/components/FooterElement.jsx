import { NavLink } from "react-router-dom";

function FooterElement({ list }) {
    return (
        <>
            {list.map(item => <NavLink
                to={item.to}
                className={({ isActive }) => isActive ? "font-semibold underline py-4 px-8" : "py-4 px-8"}
            >
                {item.tittle}
            </NavLink>

            )}

        </>

    );
}
export default FooterElement;