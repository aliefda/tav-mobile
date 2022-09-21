import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, WhisListStack, AboutStack, DetailMenuStack, HelpStack, CheckStack, OtpStack, UserAuthStack, MenuStack} from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    Menu: MenuStack,
    DetailMenu: DetailMenuStack,
    WhisList: WhisListStack,
    Chek: CheckStack,
    OnBoarding: OnBoardingStack,
    SignIn: UserAuthStack,
    Otp : OtpStack,
    Help: HelpStack,
    App: Drawer
  },
  {
    initialRouteName: 'OnBoarding'
  }
);
