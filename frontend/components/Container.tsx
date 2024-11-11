import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { RoadMapProvider } from './hooks/RoadMapProvider';
export const Container = ({ children, styles }: { children: React.ReactNode; styles?: string }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className={`bg-black ${styles}`}>
        <RoadMapProvider>{children}</RoadMapProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
