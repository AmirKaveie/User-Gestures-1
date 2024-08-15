// Import the necessary components from React Native
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Create a new component
const App = () => {
  // Initialize a state variable to store the color
  const [color, setColor] = useState('red');

  // Function to change the color when the view is pressed
  const changeColor = () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // Update the state with the new color
    setColor(randomColor);
  };

  // Return the JSX
  return (
    <View style={styles.container}>
    
      <TouchableOpacity
        // Style the view
          style={[styles.view, { backgroundColor: color }]}
        // Call the changeColor function when the view is pressed
        onPress={changeColor}
      >
        <Text style={styles.text}>Tap me!</Text> 
      </TouchableOpacity>
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    // Style the view
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // Style the text
    fontSize: 24,
  },
});

// Export the component
export default App;