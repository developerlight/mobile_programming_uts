import { useNavigation } from "@react-navigation/native";
import { Alert, Linking, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DetailAntrian = ({ route }) => {
    const data = route.params.dataAntrian
    const navigation = useNavigation();
    console.log('data detail',data)
    const handleNomor = () => {
        Linking.openURL(`tel:${data.phone}`)
    }

    const handleDone = () => {
        data.status = 'done';
        console.log('data done', data)
        Alert.alert('Antrian Selesai', 'Antrian telah selesai dilayani')
        navigation.navigate('Dashboard')
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.t_header}>Detail Antrian</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.t_title}>Data Antrian</Text>
                <Text style={styles.t_title_small}>Berikut adalah data antrian yang sedang berlangsung</Text>
                <View style={styles.v_data_antrian}>
                    <View style={styles.v_antrian}>
                        <Text style={styles.t_title_nomor}>Nomor Antrian</Text>
                        <View style={styles.v_nomor_antrian}>
                            <Text style={styles.t_nomor_antrian}>{data.number}</Text>
                        </View>
                    </View>
                    <View style={styles.v_data}>
                        <Text style={styles.text}>Nama</Text>
                        <Text style={styles.content}>{data.name}</Text>
                        <Text style={styles.text}>Nomor HP</Text>
                        <TouchableOpacity
                            style={styles.content}
                            onPress={handleNomor}
                        >
                            <Text style={styles.text}>{data.phone}</Text>
                        </TouchableOpacity>

                        <Pressable
                            style={styles.btn_done}
                            onPress={handleDone}
                        >
                            <Text style={styles.t_done}>Done</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </View>
     );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        marginTop: StatusBar.currentHeight || 0,
    },
    header : {
        paddingHorizontal: 20,
        backgroundColor: 'blue',
        height: 90,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    t_header : {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    body : {
        flex: 1,
        paddingHorizontal: 20,
    },
    t_title : {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:20,
    },
    t_title_small : {
        fontSize: 14,
        color: 'gray',
    },
    v_data_antrian : {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#176FF2',
        borderRadius: 10,
        height: 500,
        padding: 10
    },
    v_antrian : {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
    },
    t_title_nomor : {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    v_nomor_antrian : {
        backgroundColor: '#176FF2',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    t_nomor_antrian : {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    v_data : {
        flexDirection: 'column',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 30,
        padding: 10,
    },
    text : {
        fontSize: 16,
        fontWeight: 'bold',
    },
    content : {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
    },
    btn_done : {
        backgroundColor: '#176FF2',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    t_done : {
        color: 'white',
        fontSize: 16,
    }
})
export default DetailAntrian;