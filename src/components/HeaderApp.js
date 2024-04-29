import { StatusBar, StyleSheet, Text, View } from "react-native";

const HeaderApp = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.t_subHeader}>Mall Pelayanan</Text>
            <Text style={styles.t_header}>Banyuwangi</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container : {
        height: 90,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    t_header : {
        fontSize: 20,
        fontWeight: 'bold',
    },
    t_subHeader : {
        fontSize: 14,
        color: 'gray',
    }
})
export default HeaderApp;