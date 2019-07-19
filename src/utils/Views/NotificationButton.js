import React from 'react';
/* MUI */
import {
  IconButton,
  Badge,
  Tooltip
} from '@material-ui/core';
import NotificationsOutlined from '@material-ui/icons/NotificationsOutlined';

const NotificationIcon = (props) => {
  if(props.count && props.count > 0){
    return (
      <Badge badgeContent={props.count}>
        <NotificationsOutlined />
      </Badge>
    )
  }else{
    return(
      <NotificationsOutlined />
    )
  }
}

const NotificationButton = (props) => {
  if(props.title){
    return (
      <Tooltip title={props.title} aria-label={props.title} placement="bottom" className={props.className}>
        <IconButton color="primary" onClick={props.onClick} >
          <NotificationIcon count={props.count} />
        </IconButton>
      </Tooltip>
    )
  }else{
    return (
      <IconButton color="primary" onClick={props.onClick} className={props.className} >
        <NotificationIcon count={props.count} />
      </IconButton>
    )
  }

}

export default NotificationButton;
