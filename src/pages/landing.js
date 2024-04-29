import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Landing = () => {
    const navigate = useNavigation();

    return ( 
        <View style={styles.container}>
            <Image 
                source={require('./../assets/landing.png')} 
                style={{ width: '100%', height: '100%' }}
            />
            <View style={styles.v_content}>
                <View style={styles.title}>
                    <Text style={styles.t_title}>Sangar</Text>
                    <Text style={styles.t_bottom_1}>Sabar Ngantri</Text>

                </View>
                <View style={styles.bottom}>
                    <Text style={styles.t_bottom_1}>Mari Budayakan</Text>
                    <Text style={styles.t_bottom_2}>Antri dengan tertib</Text>
                    <Pressable 
                        style={styles.btn_getStarted}
                        onPress={() => navigate.navigate('Home')}
                    >
                        <Text 
                            style={styles.t_getStarted}>
                                Get Started
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
     );
}
 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    v_content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        padding: 20,
    },
    title : {
        marginTop: 100,
        alignItems: 'center',
        
    },
    t_title : {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    bottom : {
        marginBottom: 50,
    },
    t_bottom_1 : {
        fontSize: 16,
        fontWeight: "500",
        color: 'white',
        opacity: 0.8,
        
    },
    t_bottom_2 : {
        fontSize: 38,
        fontWeight: "300",
        color: 'white',
    },
    btn_getStarted : {
        backgroundColor: '#176FF2',
        padding: 10,
        width: '100%',
        height: 52,
        alignItems: 'center',
        borderRadius: 16,
        marginTop: 10,
        justifyContent: 'center',
    },
    t_getStarted : {
        color: 'white',
        fontSize: 16,
    }
})

export default Landing;