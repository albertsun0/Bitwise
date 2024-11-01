import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export const Container = ({ children, styles }: { children: React.ReactNode; styles?: string }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className={`bg-[#1b1b1d] ${styles}`}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};
