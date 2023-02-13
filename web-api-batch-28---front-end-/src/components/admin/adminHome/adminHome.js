import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Gigs from '../../gig/gigs';
import Notification from '../../notification/Notification';
import AdminGigs from '../adminGigs/adminGigs';
import Upload from '../adminHirings/adminHirings';
import AdminLogin from '../adminLogin/adminLogin';
import AdminNotification from '../adminNotifications/adminNotifications';
import AdminUsers from '../adminUsers/adminUsers';

const AdminHome = ()=>{
    const [key, setKey] = useState('home');
    return (
        <div>
            <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Users">
        <AdminUsers />
      </Tab>
      <Tab eventKey="notifications" title="Notifications">
        <AdminNotification />
      </Tab>
      <Tab eventKey="gigs" title="Gigs">
        <AdminGigs />
      </Tab>

      <Tab eventKey="hirings" title="Hirings">
        <Upload />
      </Tab>
     
    </Tabs>


        </div>
    )
}


export default AdminHome;