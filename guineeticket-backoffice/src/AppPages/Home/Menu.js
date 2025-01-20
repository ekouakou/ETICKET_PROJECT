import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faList, 
  faCalendarAlt, 
  faFileAlt, 
  faUser, 
  faEllipsisH 
} from '@fortawesome/free-solid-svg-icons';
// import './SidebarMenu.css';

const { SubMenu } = Menu;

const iconMapping = {
  faTachometerAlt: faTachometerAlt,
  faList: faList,
  faCalendarAlt: faCalendarAlt,
  faFileAlt: faFileAlt,
  faUser: faUser,
  faEllipsisH: faEllipsisH,
};

const SidebarMenu = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const location = useLocation();

  const userConnectedData = JSON.parse(localStorage.getItem('userConnectedData'));
  const menu = userConnectedData?.groupmenu[0]?.menu || [];

  useEffect(() => {
    const path = location.pathname;
    menu.forEach(item => {
      if (item.sousmenu && item.sousmenu.length > 0) {
        const activeSubMenu = item.sousmenu.some(subItem => subItem.str_url === path);
        if (activeSubMenu) {
          setOpenKeys([item.str_name]);
        }
      }
    });
  }, [location, menu]);

  const handleOpenChange = (keys) => {
    const latestKey = keys.find(key => openKeys.indexOf(key) === -1);
    setOpenKeys(latestKey ? [latestKey] : []);
  };

  const renderSubMenu = (subItems) => {
    return subItems.map((item) => (
      <Menu.Item 
        key={item.id} 
        icon={item.str_class && iconMapping[item.str_class] ? 
          <FontAwesomeIcon icon={iconMapping[item.str_class]} /> : 
          null
        }
      >
        <Link to={item.str_url}>{item.str_name}</Link>
      </Menu.Item>
    ));
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      className="px-5"
    >
      {menu.map((subMenu) => (
        subMenu.sousmenu && subMenu.sousmenu.length > 0 ? (
          <SubMenu
            key={subMenu.id}
            icon={subMenu.str_class && iconMapping[subMenu.str_class] ? 
              <FontAwesomeIcon icon={iconMapping[subMenu.str_class]} className="me-4" /> : 
              null
            }
            title={subMenu.str_name}
          >
            {renderSubMenu(subMenu.sousmenu)}
          </SubMenu>
        ) : (
          <Menu.Item 
            key={subMenu.id} 
            icon={subMenu.str_class && iconMapping[subMenu.str_class] ? 
              <FontAwesomeIcon icon={iconMapping[subMenu.str_class]} className="me-4" /> : 
              null
            }
          >
            <Link to={subMenu.str_url}>{subMenu.str_name}</Link>
          </Menu.Item>
        )
      ))}
    </Menu>
  );
};

export default SidebarMenu;