import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "~/constants";

const Logo = () => {
  return (
    <View>
      <Image
        source={images.logo}
        height={50}
        width={50}
        className="w-24 h-24"
      />
    </View>
  );
};

export default Logo;
