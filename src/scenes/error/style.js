import { Text, View } from "react-native";

const ErrorScene = (props) => {
  const { icon, title, message } = props;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{message}</Text>
    </View>
  )
};

export default ErrorScene;
