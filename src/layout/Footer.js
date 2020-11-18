import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="text-center bg-dark text-light p-3">Copyright &copy; {new Date().getFullYear()} Modus News.</div>
            </footer>
        </>
    )
}

export default Footer;
