const Navbar = () => {
    const navList = ["Home", "About", "Contact", "Login"];
    return (
        <div>
            {navList.map((item)=> <li>{item}</li>)}
        </div>
    )

}
    

export default Navbar;