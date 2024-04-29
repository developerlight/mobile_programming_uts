import { ScrollView, StyleSheet, Text, View } from "react-native";
import List from "./List";

const ListAntrian = ({ dataAntrian }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.t_title}>List Antrian</Text>
      <View style={styles.h_scroll_view}>
        <View style={styles.number}>
            <Text style={styles.t_style}>Number</Text>
        </View>
        <View style={styles.name}>
            <Text style={styles.t_style}>Name</Text>
        </View>
        <View style={styles.phone}>
            <Text style={styles.t_style}>Phone</Text>
        </View>
      </View>
      <ScrollView style={styles.scroll_view}>
         {
            dataAntrian.map((data, index) => (
               <List 
                  key={index}
                  number={data.number}
                  name={data.name}
                  phone={data.phone}
                  status={data.status}
               />
            ))
         }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
      height: 350,
      width: "100%",
      backgroundColor: "white",
      padding: 20,
   },
   t_title: {
      fontSize: 20,
      fontWeight: "bold",
   },
   h_scroll_view: {
      width: "100%",
      height: 40,
      marginTop: 10,
      flexDirection: "row",
      borderColor: "grey",
      borderBottomWidth: 2,
   },
   number: {
      flex: 0.9,
      justifyContent: 'center',
   },
   name: {
      justifyContent: 'center',
      flex: 2,
   },
   phone: {
      justifyContent: 'center',
      flex: 1.5,
   },
   t_style: {
      fontSize: 14,
      fontWeight: "500",
      color: '#176FF2'
   },
   scroll_view: {
      backgroundColor: "#176FF2",
      width: "100%",
      height: "100%",
   },
});

export default ListAntrian;
