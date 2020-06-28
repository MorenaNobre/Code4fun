import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'
import UserList from '../UserList'
import ChannelData from '../ChannelData';

// export default function Layout() { //JS
//     return(
//         <div>Oi mundo!</div>
//     )
// }

// same as above with typescript

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
            <ChannelData />
            <UserList />
        </Grid>
    )
};

export default Layout;