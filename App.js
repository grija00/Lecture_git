import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Slider, StyleSheet } from 'react-native'
import * as Speech from 'expo-speech'

const App = () => {
  const [zoom, setZoom] = useState(1)

  const startReading = (text) => {
    Speech.speak(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.magnifierContainer}>
        {/* 화면 중앙에 돋보기 기능을 추가하려면 이곳에 코드를 작성하세요 */}
      </View>
      <View style={styles.toolbar}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          onValueChange={(value) => setZoom(value)}
        />
        <TouchableOpacity
          style={styles.voiceButton}
          onPress={() => startReading('변환할 텍스트를 입력하세요')}
        >
          <Text style={styles.buttonText}>음성 변환</Text>
        </TouchableOpacity>
        {/* 설정 메뉴를 추가하려면 이곳에 코드를 작성하세요 */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  magnifierContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: '#ffa500',
    borderWidth: 2,
  },
  toolbar: {
    height: 100,
    width: '100%',
    backgroundColor: '#ffa500',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  slider: {
    width: 200,
  },
  voiceButton: {
    backgroundColor: '#ff0',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
})

export default App
