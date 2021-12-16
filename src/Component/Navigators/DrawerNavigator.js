import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Archive from "../../Pages/MainPages/MyAccount/DrawerPages/Archive";
import Help from "../../Pages/MainPages/MyAccount/DrawerPages/Help";
import QRCode from "../../Pages/MainPages/MyAccount/DrawerPages/QRCode";
import Saved from "../../Pages/MainPages/MyAccount/DrawerPages/SavedPosts";
import Settings from "../../Pages/MainPages/MyAccount/DrawerPages/Settings";
import MyAccount from "../../Pages/MainPages/MyAccount/myAccountPage";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyAccount" component={MyAccount} />
      <Drawer.Screen name="Archive" component={Archive} />
      <Drawer.Screen name="Saved" component={Saved} />
      <Drawer.Screen name="QRCode" component={QRCode} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
