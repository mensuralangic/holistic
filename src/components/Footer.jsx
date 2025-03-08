import FooterElement from "./FooterElement";
import TabButton from "./TabButton";

function Footer() {
    function handleSelect() {
        return (
console.log("hello world")
        )
    }

    return (
        <footer className="h-64 bg-gray-800 px-24 pt-12 pb-16 text-white ">
            <div className="container mx-auto flex items-start gap-6"> 
                <TabButton onSelect={handleSelect}>Contact us</TabButton>
                <TabButton onSelect={handleSelect}>Sign to our newsletter</TabButton>
                <TabButton onSelect={handleSelect}>Privacy policy</TabButton>
                <TabButton onSelect={handleSelect}>My account</TabButton>
            </div>

        </footer>
        // <footer className="h-64 bg-gray-800 px-24 pt-12 pb-16 text-white ">
        //     <FooterElement list={[
        //         { to: '/contact', tittle: 'Contact us' },
        //         { to: '/newsletter', tittle: 'Sign in to our newsletter' },
        //         { to: '/privacypolicy', tittle: 'Privacy policy' },
        //         { to: '/myaccount', tittle: 'My account' },
        //     ]} />
        // </footer>
    )
}

export default Footer;

