// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function SideBar() {
  return <SideNav
    onSelect= {(selected: any) => {
      console.log(selected);
    }}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected='home'>
        <NavItem>
          <NavIcon><i className= 'fa fa-fw fa-home' style={{fontSize: "1.5em"}}/></NavIcon>
          <NavText>Home</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
}

export default SideBar;
