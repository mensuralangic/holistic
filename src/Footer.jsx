import FooterElement from "./FooterElement";

function Footer() {
    return (
        <footer className="h-64 bg-gray-800 px-24 pt-12 pb-16 text-white ">
            <FooterElement list={[
                { to: '/contact', tittle: 'Contact us' },
                { to: '/newsletter', tittle: 'Sign in to our newsletter' },
                { to: '/privacypolicy', tittle: 'Privacy policy' },
                { to: '/myaccount', tittle: 'My account' },
            ]} />
        </footer>
    )
}

export default Footer;

