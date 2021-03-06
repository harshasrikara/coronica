import React, { createRef, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { CStyles } from '../CStyles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Do ten push-ups',
    pointVal: 10
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Do jumping jacks for 1 minute',
    pointVal: 10
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Do 20 squats',
    pointVal: 20
  },
];

function Item({ title, pointVal, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor: '#96a6e2', marginTop: 10, paddingHorizontal: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, alignItems:'center' }}>
        <Text style={CStyles.textStyle}>{title}</Text>
        <Text style={CStyles.textStyle}>{pointVal}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Physical({ navigation }) {
    const [points, setPoints] = useState(0);
    

  return (
    <View style={CStyles.container}>
      <AnimatedCircularProgress
        size={200}
        width={25}
        fill={points}
        tintColor="#011638"
        backgroundColor="#96a6e2"
        style={{marginTop: 100}}>
        {
          (fill) => (
            <Text style={CStyles.titleStyle}>
              {points}
            </Text>
          )
        }
      </AnimatedCircularProgress>
      <FlatList
        style={{ paddingVertical: 20, width: 300 }}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} pointVal={item.pointVal} onPress={() => {
          setPoints(points + item.pointVal);
        }} />}
        keyExtractor={item => item.id} />
    </View>
  );

}
