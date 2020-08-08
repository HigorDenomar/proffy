import React from "react";
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { BorderlessButton } from "react-native-gesture-handler";

import { useThemeContext } from "../../contexts/theme";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { colors } = useTheme();

  async function handleTheme() {
    await toggleTheme();
  }

  return (
    <BorderlessButton onPress={handleTheme}>
      <Icon
        name="moon"
        color={theme === 'dark' ? colors.text : colors.inactiveText } size={20}
      />
    </BorderlessButton>
  );
}

export default ToggleTheme;