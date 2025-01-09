import { useState } from 'react';
import { Link } from 'react-router';

function Dropdown({ list }) { 
    const [isOpen, setIsOpen] = useState(false);

    function handleMouseLeave() {
        setIsOpen(false);
    }

    function handleMouseEnter() {
        setIsOpen(true);
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative py-4 px-8 mx-auto'>
            <button className='w-full cursor-pointer'>
                SHOP
            </button>
            {isOpen && <ul className='absolute grid grid-cols-1 divide-y bg-gray-50 left-1/2 -translate-x-1/2 w-48 top-14 bg-white text-slate-600'>
                {list.map(item => <li className='px-4 py-2 block'>
                    <Link to={item.to}>{item.title}</Link>
                </li>)}
            </ul>}
        </div>
    );
}

export default Dropdown;