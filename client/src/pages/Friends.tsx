import {Grid, GridItem} from '@chakra-ui/react';
import SideNav from '../components/Sidenav';
import Sidebar from '../components/Sidebar';

const Friends = () => {
  return (
    <Grid templateColumns="repeat(10, 1fr)" h="100vh">
      <GridItem colSpan={3} borderRight="1px solid grey">
        <Sidebar />
      </GridItem>
      <GridItem colSpan={7}></GridItem>
    </Grid>
  );
};

export default Friends;
