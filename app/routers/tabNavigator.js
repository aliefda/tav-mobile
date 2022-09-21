import React from 'react';
import { TabNavigator } from 'react-navigation';
import { HomeStack, SearchStack, PrivacyStack, AboutStack, UploadPhotoStack, HistoryStack, AccountStack, MenuStack } from './stackNavigator';
import TabBarBottom from '../components/elements/TabBarBottom';
import TabBarIcon from '../components/elements/TabBarIcon';
import Home from '../../assets/svgs/Home';
import HomeInactive from '../../assets/svgs/HomeInactive';
import Account from '../../assets/svgs/Account';
import AccountInactive from '../../assets/svgs/AccountInactive';
import Order from '../../assets/svgs/Order';
import OrderInactive from '../../assets/svgs/OrderInactive';
import Inbox from '../../assets/svgs/Inbox';
import InboxInactive from '../../assets/svgs/InboxInactive';


const COLOR_DARK_GREY = '#797979';
const COLOR_GREEN = '#1ea54f';
const COLOR_GREY = '#bdbdbd';
const COLOR_WHITE = '#ffffff';

const createTab = ({ stack, image, iconStyle, badge }) => ({
  screen: stack,
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon
        isActive={tintColor === COLOR_GREEN}
        icon={tintColor === COLOR_WHITE ? image.active : image.inactive}
        iconStyle={[iconStyle, { height: 30, width: 30}]}
        navigation={navigation}
      />
    )
  })
});

const navigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: true,
  lazy: true,
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: COLOR_WHITE,
    inactiveTintColor: COLOR_GREY,
    style: {
      borderTopWidth: 0.5,
      justifyContent: 'space-between',
      backgroundColor: COLOR_WHITE,
      height: 60
    },
    labelStyle: {
      color: COLOR_DARK_GREY
    },
    tabStyle: {},
    indicatorStyle: {
      backgroundColor: COLOR_WHITE
    }
  }
};

const createTabNavigator = (tabDefinations = []) => {
  const tabs = tabDefinations.map(createTab);
  return new TabNavigator(tabs, navigatorConfig);
};

export const AppStack = createTabNavigator([
  {
    stack: HomeStack,
    image: {
      active: <Home/>,
      inactive: <HomeInactive/>
    }
  },
  {
    stack: AboutStack,
    image: {
      active: <Order/>,
      inactive: <OrderInactive/>
    }
  },
  {
    stack: PrivacyStack,
    image: {
      active: <Inbox/>,
      inactive: <InboxInactive/>
    }
  },
  {
    stack: AccountStack,
    image: {
      active: <Account />,
      inactive: <AccountInactive />
    }
  },
]);

export default { AppStack };
