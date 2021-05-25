import React from "react";
import "./Sidebar.css";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBYtnL_gy7iukxcI6LlXjjyHQEZUCdkE3Mg&usqp=CAU" />
        <div className="sidebar_headerRight">
          
          <IconButton>
            <DonutSmallIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className='sidebar_chats'>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
