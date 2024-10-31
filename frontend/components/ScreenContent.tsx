import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';
import { Container } from './Container';
type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className="h-full bg-black text-white">
      <Container>
        <EditScreenInfo path={path} />
      </Container>
    </View>
  );
};
