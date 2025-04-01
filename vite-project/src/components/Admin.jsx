import React from 'react';
import Navbar from './Navbar';
import AdminCards from './AdminCards';

const Admin = () => {
  return (
    <div>
      {/* Navbar (remains separate without a background change) */}
      <Navbar admin={true} />

      {/* Grey background container for the rest of the page */}
      <div className="! bg-gray-100 min-h-screen flex flex-col items-center">
        {console.log("in admin")}
        
        {/* Cards container */}
        <div className="flex flex-wrap justify-center gap-6 p-6 mt-10">
          <AdminCards title="Users" description="Fetch, Add or Remove Users" />
          <AdminCards title="Hotels" description="Fetch, Add or Remove Hotels" />
          <AdminCards title="Flats" description="Fetch, Add or Remove Flats" />
          <AdminCards title="PGs" description="Fetch, Add or Remove PGs" />
        </div>
      </div>
    </div>
  );
};

export default Admin;
