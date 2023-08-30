import { View, Text } from "react-native";

//local
import styles from "./styles";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100} %` }]}>
        <View style={styles.highlight}></View>
      </View>
    </View>
  );
};

export default ProgressBar;
