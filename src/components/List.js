import { StyleSheet, Text, View } from "react-native";

const List = ({number, name, phone, status}) => {
  return (
    status === 'waiting' ? (
        <View style={styles.h_scroll_view}>
            <View style={styles.number}>
                <Text style={styles.t_style}>{number}</Text>
            </View>
            <View style={styles.name}>
                <Text style={styles.t_style}>{name}</Text>
            </View>
            <View style={styles.phone}>
                <Text style={styles.t_style}>{phone}</Text>
            </View>
        </View>
    ) : null
  )
};

const styles = StyleSheet.create({
  h_scroll_view: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    backgroundColor: 'white',
    borderColor: "grey",
  },
  number: {
    flex: 0.9,
    justifyContent: "center",
  },
  name: {
    justifyContent: "center",
    flex: 2,
  },
  phone: {
    justifyContent: "center",
    flex: 1.5,
  },
  t_style: {
    fontSize: 14,
    fontWeight: "500",
  },
});
export default List;
