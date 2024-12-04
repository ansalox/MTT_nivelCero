import React from 'react';

const menuItems = [
  { name: 'Desarrollo Web', link: '/readmes/Guide_VsCode.md' },
  { name: 'Git/GitHub', link: '/readmes/Guide_GIT_Install_ORD.md' },
];

const Sidebar = ({ setView }) => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white">
      <ul className="p-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="my-4 cursor-pointer hover:bg-gray-700 p-2"
            onClick={() => setView(item.link)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
