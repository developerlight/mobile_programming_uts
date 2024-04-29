import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DisplayAntrian = ({ dataAntrian }) => {
    const navigation = useNavigation();
    const data = dataAntrian?.filter((data) => data.status === 'waiting') || [];
    console.log(data[0]);
    const handlerDetail = () => {
        if(data.length > 0) {
            navigation.navigate('DetailAntrian', {dataAntrian: data[0]});
        }
    }

    return ( 
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.v_display}
                onPress={handlerDetail}
            >
                <View style={styles.display_nomor}>
                    <Text style={styles.t_title_display}>Display Nomor</Text>
                    <Text style={styles.t_display_nomor}>{data.length > 0 ? data[0].number : 0}</Text>
                </View>
                <View style={styles.display_data}>
                    <Text style={styles.t_title_display}>Data Antrian</Text>
                    <Text style={styles.t_name_data}>{data.length > 0 ? data[0].name : 'None'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        height : 300,
        width: '100%',
        backgroundColor: 'blue',
        paddingVertical: 10,
    },
    v_display : {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    display_nomor : {
        flex: 1,
        backgroundColor: 'white',
        borderRightWidth: 1,
    },
    t_title_display : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        padding: 10,
        borderBottomWidth:1
    },
    t_display_nomor : {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 45
    },
    display_data : {
        flex: 1,
        backgroundColor: 'white',
        borderLeftWidth: 1,
    },
    t_name_data : {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 45
    },
})
 
export default DisplayAntrian;