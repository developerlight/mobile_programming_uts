import { useEffect, useState } from "react";
import { SafeAreaView, Text, View, TextInput, StyleSheet, Button, Alert } from "react-native";

const Inputan = ({ dataAntrian, setDataAntrian }) => {
    const [name, onChangeName] = useState('');
    const [phone, onChangePhone] = useState('');

    useEffect(() => {
        console.log('Data Antrian', dataAntrian);
    }, [dataAntrian])

    const sendData = () => {
        if(!name.trim() || !phone.trim()) {
            Alert.alert('Error','Data Harus Diisi');
            return;
        }
        const newEntry = {
            number: Array.isArray(dataAntrian) ? dataAntrian.length + 1 : 1,
            name: name,
            phone: phone,
            status: 'waiting',
        };
        
        setDataAntrian(prevData => [...prevData, newEntry]);

        onChangeName('');
        onChangePhone('');

        Alert.alert('Success','Data Berhasil Disimpan');
    }
    return ( 
        <View style={styles.container}>
            <Text style={styles.t_name}>Name</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={onChangeName}
                value={name}
                paddingLeft={10}
                paddingRight={10}
                placeholder="Masukkan Nama Anda"
            />
            <Text style={styles.t_name}>Phone</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={onChangePhone}
                value={phone}
                paddingLeft={10}
                paddingRight={10}
                placeholder="Masukkan Nomor Hp Anda"
            />
            <Button
                onPress={sendData}
                title="Submit"
                color="#841584"
                accessibilityLabel="Learn more about this purple button" />
            
        </View>
     );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 20,
    },
    t_name : {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
 
export default Inputan;