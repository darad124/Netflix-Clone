import NavbarItem from "./NavbarItem";
const Navbar =  () => {
    return(
        <nav className="fixed z-40 w-full ">
            <div className="flex flex-row items-center px-4 py-6 transition duration-500 md:px-16 bg-zinc-900 bg-opacity-90">
                <img  className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
                <div className="flex-row hidden ml-8 gap-7 lg:flex">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Films"/>
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My List"/>
                    <NavbarItem label="Browse by Languages"/>
                </div>
                <div className="relative flex flex-row items-center gap-2 ml-8 cursor-pointer lg:hidden" >
                    <p className="text-white test-sm ">Browse</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;