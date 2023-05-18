"use client";

import Link from "next/link";


const Sidebar = () => {
 

 

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <ul className="sidebar">
       
          <>
            <li>
              {" "}
              <Link
                href="/admin/products/new"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                New Product <span className="text-red-500">(Admin)</span>
              </Link>
            </li>

            <li>
              {" "}
              <Link
                href="/admin/products"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                All Products <span className="text-red-500">(Admin)</span>
              </Link>
            </li>

            <li>
              {" "}
             
                All Orders <span className="text-red-500">(Admin)</span>
            
            </li>

            <li>
              {" "}
             
                All Users <span className="text-red-500">(Admin)</span>
             
            </li>

            <hr />
          </>
        

        <li>
          {" "}
        
            Your Profile
          
        </li>
        <li>
          {" "}
         
            Orders
         
        </li>
        <li>
          {" "}
        
            Update Profile
      
        </li>
        <li>
          {" "}
        
            Update Password
         
        </li>

        <li>
          {" "}
          <a
            className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
           
          >
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;