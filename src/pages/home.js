import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./dashboard";
import Register from "./register";
import { useState } from "react";
import DetailAntrian from "./details";

const Tab = createBottomTabNavigator();

const Home = () => {
    const [dataAntrian, setDataAntrian] = useState([])
    return ( 
            <Tab.Navigator
                tabBarOptions={{
                    keyboardHidesTabBar: true
                }}
            >
                <Tab.Screen 
                    name="Dashboard" 
                    options={{
                        headerShown: false,
                    }}
                >
                    {props => <Dashboard {...props} dataAntrian={dataAntrian} />}
                </Tab.Screen>
                <Tab.Screen 
                    name="Register"
                    options={{
                        headerShown: false,
                    }}
                >
                    {props => <Register {...props} dataAntrian={dataAntrian} setDataAntrian={setDataAntrian}/>}
                </Tab.Screen>
                {/* <Tab.Screen 
                    name="Landing"
                    options={{
                        headerShown: false,
                    }}
                    component={DetailAntrian}
                /> */}
            </Tab.Navigator>
     );
}
 
export default Home;