

//navigation code


import * as React from 'react';
import { Button, View, Text , StyleSheet, Dimensions, ScrollView, Image, ImageBackground,FlatList,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//chart lib
import {LineChart, BarChart} from 'react-native-chart-kit';





//switch button
import { Switch } from 'react-native-paper';








function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight:"900",
                padding: 16,
                marginTop: 10,
              }}>
              Salah Tracker App
            </Text>

            <view>

            <Button
      
      color="#fb8c00"
        title="            Calender          "
        onPress={() => navigation.navigate('Calender')}
      />


<Button
marginTop="10px"
        title="   Offered Prayers   "
        color="#fb8c00"
        onPress={() => navigation.navigate('Offered Prayers')}
      />

<Button
      color="#fb8c00"
        title="Last 7 days Report"
        onPress={() => navigation.navigate('Last_7_days_Report')}
      />

<Button
 color="#fb8c00"
        title="Monthly Report"
        onPress={() => navigation.navigate('Monthly Report')}
      />

<Button

 color="#fb8c00"
        title="Data Range"
        onPress={() => navigation.navigate('Data Range')}
      />
            </view>

     



    </View>
  );
}






  function CalenderScreen (){
  

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
      <Text>sir calender is in commented form in last of this page
        ,i try alot to integrate but ...
      </Text>
      
      </View>

   </View>
      );
}





function OfferedPrayerScreen() {
 
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', 
    backgroundColor:'#e8911e'}}>
     <View >
   
       
     <Text
         style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
              }}>
             Offered Prayers
            </Text>

      
         <view>
         <Image source = {require('./assets/f.jpg')} style = {{ width: 100, height: 70, flexDirection:"row" }}/>
         <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
         </view>
           
         <view>
         <Image source = {require('./assets/z.jpg')} style = {{ width: 100, height: 70, flexDirection:"row" }}/>
         <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
         </view>
           
         <view>
         <Image source = {require('./assets/a.jpg')} style = {{ width: 100, height: 70, flexDirection:"row" }}/>
         <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
         </view>
           
         <view>
         <Image source = {require('./assets/m.jpg')} style = {{ width: 100, height: 70, flexDirection:"row" }}/>
         <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
         </view>
           

      
         <Image source = {require('./assets/i.jpg')} style = {{ width: 100, height: 70, flexDirection:"row" }}/>
         <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        
           

        
         
 


</View>
</View>
</ScrollView>
);
}

//Last 7 days report

function DReportScreen() {
  return (
     <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View>



           <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
              }}>
              Last_7_days_Report
            </Text>
            <BarChart data={{
              labels: ['Fajar',
                'Zuhr',
                'Asr',
                'Maghrib',
                'Isha',

              ],
              datasets: [
                {
                  data: [50, 45, 44, 40, 55],
                },
              ],
            }}
              width={Dimensions.get('window').width - 500}
              height={420}
              yAxisLabel={' '} chartConfig={{
                backgroundColor: '#10c9bd',
                backgroundGradientFrom: '#f2b40a',
                backgroundGradientTo: '#99f7e3',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />


      </View>
    </View>
    </ScrollView>
  );
}

//Monthly report

function MreportScreen() {
  return (

    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      <View>
      <Text
         style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
              }}>
              Monthly Report
            </Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get('window').width - 500}
              height={420}
    yAxisLabel=" "
    yAxisSuffix=" "
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    </View>
    </ScrollView>



  );
}

//Data Range

function DataRangeScreen() {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      <View>
      <Text
         style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
              }}>
              Monthly Report
            </Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get('window').width - 500}
    height={420}
    yAxisLabel=" "
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calender" component={CalenderScreen} />
        <Stack.Screen name="Offered Prayers" component={OfferedPrayerScreen} />
        <Stack.Screen name="Last_7_days_Report" component={DReportScreen} />
        <Stack.Screen name="Monthly Report" component={MreportScreen} />
        <Stack.Screen name="Data Range" component={DataRangeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


