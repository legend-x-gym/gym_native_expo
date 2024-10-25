import { View, Text } from "react-native";
import React from "react";

const StyledText = ({
  className,
  children,
  fontClassName = "font-montRegular",
}: {
  className?: string;
  fontClassName?: string;
  children: React.ReactNode;
}) => {
  return <Text className={`${className} ${fontClassName}`}>{children}</Text>;
};

export default StyledText;
