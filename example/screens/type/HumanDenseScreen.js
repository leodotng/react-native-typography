import React from "react";
import { View, Text } from "react-native";
import { human } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const HumanDenseScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[human.largeTitle, guides]}>日本語</Text>
          <Text style={[human.title1, guides]}>日本語</Text>
          <Text style={[human.title2, guides]}>日本語</Text>
          <Text style={[human.title3, guides]}>日本語</Text>
          <Text style={[human.headline, guides]}>日本語</Text>
          <Text style={[human.body, guides]}>日本語</Text>
          <Text style={[human.callout, guides]}>日本語</Text>
          <Text style={[human.subhead, guides]}>日本語</Text>
          <Text style={[human.footnote, guides]}>日本語</Text>
          <Text style={[human.caption1, guides]}>日本語</Text>
          <Text style={[human.caption2, guides]}>日本語</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[human.largeTitleWhite, guides]}>日本語</Text>
          <Text style={[human.title1White, guides]}>日本語</Text>
          <Text style={[human.title2White, guides]}>日本語</Text>
          <Text style={[human.title3White, guides]}>日本語</Text>
          <Text style={[human.headlineWhite, guides]}>日本語</Text>
          <Text style={[human.bodyWhite, guides]}>日本語</Text>
          <Text style={[human.calloutWhite, guides]}>日本語</Text>
          <Text style={[human.subheadWhite, guides]}>日本語</Text>
          <Text style={[human.footnoteWhite, guides]}>日本語</Text>
          <Text style={[human.caption1White, guides]}>日本語</Text>
          <Text style={[human.caption2White, guides]}>日本語</Text>
        </View>
      )}
    />
  );
};

export default HumanDenseScreen;
