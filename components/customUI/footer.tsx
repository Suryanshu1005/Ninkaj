const Footer = () => {
    return (
        <div className="lg:flex md:flex sm:grid p-4 mt-auto lg:justify-between md:justify-between sm:gap-4">
            <div className="lg:justify-start items-center md:justify-center sm:justify-center">
                <p className="font-semibold">© NINKAJ ELECTRONICS 2023</p>
            </div>
            <div className="lg:flex lg:items-center lg:justify-end hidden sm:flex">
                <p>Designed by: - Suryanshu Tiwari</p>
            </div>
        </div>
    )
}

export default Footer;