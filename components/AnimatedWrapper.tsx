import React from "react";
import { StyleSheet, Text, View, StyleProp, ViewStyle } from "react-native";
import LottieView, { AnimatedLottieViewProps } from "lottie-react-native";

type AnimatedWrapperProps = AnimatedLottieViewProps & {
  children: React.ReactNode;
  showAnimation?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  title?: string;
};

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  showAnimation,
  containerStyle,
  textStyle,
  title,
  style,
  ...lottieProps
}) => {
  if (!showAnimation) return <>{children}</>;
  return (
    <View
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30%",
        },
        containerStyle,
      ]}
    >
      <LottieView
        autoPlay
        loop
        style={[{ width: "80%", aspectRatio: 1 }, style]}
        {...lottieProps}
      />
      <Text style={[{ fontSize: 25, fontWeight: "300" }, textStyle]}>
        {title}
      </Text>
    </View>
  );
};

export default AnimatedWrapper;

const styles = StyleSheet.create({});
