import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fafafa;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  height: 50px;
  flex: 1;
`;

export const Footer = styled.View`
  height: 110px;
`;
export const FooterContainer = styled.SafeAreaView``;
