import MyButton from './MyButton';
import Icon from './Icon';
import Dropdown from './Dropdown';


const Navbar = () => {

    return (
        <div className="bg-emerald-600 px-24 pt-12 pb-16 text-white sticky top-0 ">
            <div className="container mx-auto flex items-start justify-between">
                <div className="text-7xl">
                    <MyButton
                        to="/home"
                        title='LOGO'
                    />
                </div>
                <div className="flex items-center">
                    <MyButton
                        to="/about"
                        title='ABOUT'
                    />
                    <MyButton
                        to="/blog"
                        title='BLOG'
                    />
                    <Dropdown list={[
                        {to: '/literature', title: "Literature"},
                        {to: '/dietarysupplements', title: "Dietary supplements"},
                        {to: '/courses', title: "Courses"},
                    ]} />
                    <MyButton
                        to="/contact"
                        title='CONTACT'
                    />
                    <Icon name="Facebook" />

                </div>
            </div>
        </div>
    );
}

export default Navbar;
