import logo from "../../public/logo_aiem.png"

const Footer = () => {
    return ( 
        

<footer class="bg-[#484494]   shadow  font-custom1 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://www.aiem.ma/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} class="w-20" alt="Flowbite Logo" />
                
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-white font-custom1">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Website</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Youtube</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Linkedin</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6  sm:mx-auto lg:my-8" />
        <span class="block text-sm  sm:text-center text-white ">© 2023 <a target="_blank" href="https://www.linkedin.com" class="hover:underline">Reda™</a>. All Rights Reserved.</span>
    </div>
</footer>


     );
}
 
export default Footer;