import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export const Button = ({
  children,
  onPress,
  text,
}: {
  children?: React.ReactNode;
  text?: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-row items-center justify-center gap-2 px-6 py-4 ${styles.border}`}>
      {text ? <Text className="text-white">{text}</Text> : children}
    </TouchableOpacity>
  );
};
