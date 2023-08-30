import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

// local
import ProgressBar from "../ProgressBar";
import Heart from "../../../assets/images/heart.png";
import styles from "./styles";

const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
      <Image source={Heart} style={styles.icon} resizeMode="contain" />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

export default Header;
