import { StatusBar, StyleSheet, Text, View } from "react-native";
import Inputan from "../components/Inputan";


const Register = ({ dataAntrian, setDataAntrian }) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Register</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.t_title}>Formulir Pendaftaran</Text>
                <Text style={styles.t_title_small}>Bagi Customer yang baru datang silahkan isi formulir pendaftaran terlebih dahulu</Text>
                <View style={styles.formulir}>
                    <Inputan dataAntrian={dataAntrian} setDataAntrian={setDataAntrian}/>
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
    text : {
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
    formulir : {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#176FF2',
        borderRadius: 10,
        height: 300,
    }
})

export default Register;