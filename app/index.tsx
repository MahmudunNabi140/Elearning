import { Text, View, Image,StyleSheet } from "react-native";
import Colors from "./../constent/Colors";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >
      <Image source={require('../assets/images/landing.png')} style={{
        width: '100%',
        height: 400,
        marginTop: 70
      }}>
      </Image>

      <View style={{
        backgroundColor: Colors.primary,
        padding: 25,
        height: '100%',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
      }} >
        <Text
          style={{
            fontSize: 30,
            color: Colors.white,
            textAlign: "center",
            marginTop: 20,
            // fontWeight: "bold",
            fontFamily: 'outfit-Bold'
          }}
        >
          Welcome to Elearning
        </Text>
        <Text style={{
          color: Colors.white,
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          fontFamily: 'outfit'
        }}>
          Transform your life through education
        </Text>

        <View style={styles.button}>
          <Text style={[styles.buttonText, { color: Colors.primary }]}>
            Get Started
          </Text>
        </View>
        <View style={[styles.button, { backgroundColor: Colors.primary ,
          borderWidth: 1,
          borderColor: Colors.white,
        }]}>
          <Text style={[styles.buttonText, { color: Colors.white }]}>
            Already have an account?
          </Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: { 
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'outfit'
   }
  
});

