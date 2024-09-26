import Logo from "../../Logo";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
 return (
   <footer className="bg-[#f3f6fa] dark:bg-[#232D3F] text-slate-600  dark:text-white ">
     <div className="w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6">
       <div className="w-3/12 lg:w-4/12 sm:w-full">
         <div className="flex flex-col gap-3 items-start">
           <Logo />
           <ul className="flex flex-col gap-2 ">
             <li>
               Address : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consectetur ,
             </li>
             <li>Phone : 4343434344</li>
             <li>Email : support@simple.com</li>
           </ul>
         </div>
       </div>

       <div className="w-5/12 lg:w-8/12 sm:w-full">
         <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
           <div>
             <h2 className="font-bold text-lg mb-2">Usefull Links </h2>
             <div className="flex justify-between gap-[80px] lg:gap-[40px] w-full">
               <ul className="flex flex-col gap-2  text-sm font-semibold ">
                 <li className="hover:pl-2 transition-all duration-100 hover:text-[#059473]">
                   <Link>About Us </Link>
                 </li>
                 <li className="transition-all duration-100 hover:text-[#059473]">
                   <Link>About Our Shop </Link>
                 </li>
                 <li className="hover:pl-2 transition-all duration-100 hover:text-[#059473]">
                   <Link>Delivery </Link>
                 </li>
                 <li className="hover:pl-2 transition-all duration-100 hover:text-[#059473]">
                   <Link>Privacy Policy </Link>
                 </li>
                 <li className="hover:pl-2 transition-all duration-100 hover:text-[#059473]">
                   <Link>Blogs </Link>
                 </li>
               </ul>

               <ul className="flex flex-col gap-2  text-sm font-semibold">
                  <li className="hover:pl-2 transition-all duration-100 hover:text-[#059473]">
                   <Link>Our Service </Link>
                 </li>
                  <li className="hover:pl-2 transition-all duration-100 hover:text-[#059473]">
                   <Link>Company Profile</Link>
                 </li>
                 <li className="transition-all duration-100 hover:text-[#059473]">
                   <Link>Delivery Information </Link>
                 </li>
                  <li className="hover:pl-2 transition-all duration-100 hover:text-[#059473]">
                   <Link>Privacy Policy </Link>
                 </li>
                  <li className="hover:pl-2 transition-all duration-100 hover:text-[#059473]">
                   <Link>Blogs </Link>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>

       <div className="w-4/12 lg:w-full lg:mt-6 ">
         <div className="w-full flex flex-col justify-start gap-5">
           <h2 className="font-bold text-lg mb-2">Join Our Shop</h2>
           <span>
             Get Email updates about tour latest and shop specials offers
           </span>
           <div className="h-[50px] w-full bg-white  dark:bg-[#232D3F]  border dark:border-slate-600 relative">
             <input
               className="h-full bg-transparent w-full px-3 outline-0"
               type="text"
               placeholder="Enter Your Email"
             />
             <button className="h-full absolute right-0 bg-[#059473] text-white uppercase px-4 font-bold text-sm">
               Subscribe
             </button>
           </div>
           <ul className="flex justify-start items-center gap-3">
             <li>
               <a
                 className="w-[38px] h-[38px]  dark:border-slate-600  hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white  dark:border dark:bg-[#232D3F] dark:hover:bg-[#059473] hover:rotate-[720deg] transition-all rounded-full"
                 href="#"
               >
                 <FaFacebookF />{" "}
               </a>
             </li>

             <li>
               <a
                 className="w-[38px] h-[38px]  dark:border-slate-600  hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white  dark:border dark:bg-[#232D3F] dark:hover:bg-[#059473] hover:rotate-[720deg] transition-all rounded-full"
                 href="#"
               >
                 <FaTwitter />{" "}
               </a>
             </li>
             <li>
               <a
                 className="w-[38px] h-[38px]  dark:border-slate-600  hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white  dark:border dark:bg-[#232D3F] dark:hover:bg-[#059473] hover:rotate-[720deg] transition-all rounded-full"
                 href="#"
               >
                 <FaLinkedin />{" "}
               </a>
             </li>
             <li>
               <a
                 className="w-[38px] h-[38px]  dark:border-slate-600  hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white  dark:border dark:bg-[#232D3F] dark:hover:bg-[#059473] hover:rotate-[720deg] transition-all rounded-full"
                 href="#"
               >
                 <FaGithub />{" "}
               </a>
             </li>
           </ul>
         </div>
       </div>
     </div>

     <div className="w-[90%] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center">
       <span>Copiright @ 2024 All Rights Reserved </span>
     </div>
   </footer>
 );
}

export default Footer
