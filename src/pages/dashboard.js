import { StyleSheet, Text, View } from "react-native";
import HeaderApp from "../components/HeaderApp";
import ListAntrian from "../components/ListAntrian";
import DisplayAntrian from "../components/DisplayAntrian";
import { createContext, useContext, useState } from "react";

const AntrianContext = createContext()

export const AntrianProvider = ({ children }) => {
    const [dataAntrian, setDataAntrian] = useState([])

    return (
        <AntrianContext.Provider value={{dataAntrian, setDataAntrian}}>
            {children}
        </AntrianContext.Provider>
    )
}

export const useAntrian = () => {
    const context = useContext(AntrianContext)
    if(!context) {
        throw new Error('useAntrian must be used within AntrianProvider')
    }
    return context
}

const Dashboard = ({dataAntrian}) => {
    
    return ( 
        <View style={styles.container}>
            <HeaderApp />
            <DisplayAntrian dataAntrian={dataAntrian}/>
            <ListAntrian dataAntrian={dataAntrian} />
        </View>
     );
}
 
const styles = StyleSheet.create({
    container : {
        flex: 1,
        width: '100%',
        backgroundColor: 'blue'
    }
})

export default Dashboard;

