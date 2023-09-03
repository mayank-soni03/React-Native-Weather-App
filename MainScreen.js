import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid';
import styles from './MainScreenStyle';
import { debounce } from 'lodash';
import { fetchLocations, fetchWeatherForecast } from './WeatherApi';
import { weatherImages } from './ApiKey';
import * as Progress from 'react-native-progress';
import { getData, storeData } from './asyncStorage';

export default function MainScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const[loading, setLoading] = useState(true);

  const handleLocation = (loc) => {
    // console.log('location: ', loc);
    setLocations([]);
    toggleSearch(false);
    setLoading(true);
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7'
    }).then(data => {
      setWeather(data);
      setLoading(false);
      storeData('city', loc.name);
      // console.log('got forecast: ', data);
    })
  }

  const handleSearch = value => {
    // fetch locations
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then(data => {
        setLocations(data);
      })
    }
  }

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    let myCity = await getData('city');
    let cityName = 'London';
    if(myCity) {
      cityName = myCity;
    }
    
    fetchWeatherForecast({
      cityName,
      days: '7'
    }).then(data => {
      console.log('@@@ weather data', data)
      setWeather(data);
      setLoading(false)
    })
  }
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const { location, current } = weather;

  return (
    <View style={{ flex: '1' }}>
      <StatusBar style="light" />
      <ImageBackground style={styles.BGcolor} blurRadius={80} source={require('./Images/bg.png')}
      >
        {
          loading? (
            <View style={styles.loadingView}>
              <Progress.CircleSnail thickness={10} size={140} color='#0bb3b2' />
            </View>
          ):(
            <SafeAreaView style={{ flex: '1' }}>

          {/* search section */}
          <View style={styles.Mar} >
            <View style={[styles.SearchBox, { backgroundColor: showSearch ? 'rgba(255,255,255,0.2)' : 'transparent' }]}>
              {
                showSearch ? (
                  <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder='Search City'
                    placeholderTextColor={'lightgray'}
                    style={styles.TextInput}
                  />
                ) : null
              }

              <TouchableOpacity
                onPress={() => toggleSearch(!showSearch)}
                style={styles.TouchableOpa}>
                <MagnifyingGlassIcon size={30} color={"white"} />
              </TouchableOpacity>
            </View>
            {
              locations.length > 0 && showSearch ? (
                <View style={styles.location}>
                  {
                    locations.map((loc, index) => {
                      let showBorder = index + 1 != locations.length;
                      let borderClass = showBorder ? '2px' : null;
                      let borderColor = showBorder ? 'rgb(156,163,176)' : null;
                      return (
                        <TouchableOpacity
                          onPress={() => handleLocation(loc)}
                          style={[styles.location2, { borderBottomWidth: borderClass, borderBottomColor: borderColor }]}
                          key={index}
                        >
                          <MapPinIcon size="20" style={styles.mapColor} />
                          <Text style={styles.text}>{loc?.name}, {loc?.country}
                          </Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
              ) : null
            }
          </View>

          {/* Forecast Section */}
          <View style={styles.forecastView}>

            {/* Location */}
            <Text style={styles.text2}>{location?.name},
              <Text style={styles.text3}>{" " + location?.country}</Text></Text>

            {/* Weather Image */}
            <View style={styles.WeatherView}>
              <Image
                source={weatherImages[current?.condition?.text]}
                style={styles.partlycloudimg} />
            </View>

            {/* Degree Celsius */}
            <View style={styles.degreeView}>
              <Text style={styles.degreeText}>
                {current?.temp_c}&#176;
              </Text>
              <Text style={styles.degreeText2}>
                {current?.condition?.text}
              </Text>
            </View>

            {/* Other Stats */}
            <View style={styles.otherStats}>
              <View style={styles.otherStats2}>
                <Image source={require('./icons/wind.png')}
                  style={styles.otherStatsImg} />
                <Text style={styles.otherStatstext}>
                  {current?.wind_kph}km/h
                </Text>
              </View>
              <View style={styles.otherStats2}>
                <Image source={require('./icons/drop.png')}
                  style={styles.otherStatsImg} />
                <Text style={styles.otherStatstext}>
                  {current?.humidity}%
                </Text>
              </View>
              <View style={styles.otherStats2}>
                <Image source={require('./icons/sun.png')}
                  style={styles.otherStatsImg} />
                <Text style={styles.otherStatstext}>
                  {weather?.forecast?.forecastday[0]?.astro?.sunrise}
                </Text>
              </View>
            </View>
          </View>

          {/* forecast for next days */}
          <View style={styles.forecast}>
            <View style={styles.forecast2}>
              <CalendarDaysIcon size="22" color='white' />
              <Text style={styles.forecastText}>Daily Forecast</Text>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingHorizontal: 15 }}
              showsHorizontalScrollIndicator={false}
            >
              {
                weather?.forecast?.forecastday?.map((item, index) => {
                  let date = new Date(item.date);
                  let options = { weekday: 'long' };
                  let dayName = date.toLocaleDateString('en-US', options);
                  dayName = dayName.split(',')[0]
                  return (
                    <View
                      key={index}
                      style={styles.ScrollView}>
                      <Image style={styles.ScrollViewImg} source={weatherImages[item?.day?.condition?.text]} />
                      <Text style={{ color: 'white' }}>{dayName}</Text>
                      <Text style={styles.ScrollViewText}>
                        {item?.day?.avgtemp_c}&#176;</Text>
                    </View>
                  )
                })
              }
            </ScrollView>
          </View>
        </SafeAreaView>
          )
        }
        
      </ImageBackground>
    </View>
  )
}

