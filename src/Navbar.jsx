import MyButton from './MyButton';
import Icon from './Icon';


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
                <div className="flex gap-10">
                    <MyButton
                        to="/about"
                        title='ABOUT'
                    />
                    <MyButton
                        to="/blog"
                        title='BLOG'
                    />
                     <MyButton
                        title='SHOP'  
                    />
                    <MyButton
                        to="/contact"
                        title='CONTACT'
                    />
                    {/* /* shop button ce biti padajuci meni */}
                    <Icon name="Facebook" />

                </div>
            </div>
        </div>
    );
}

export default Navbar;
