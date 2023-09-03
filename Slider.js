// import { StatusBar } from "react-native";
// import React from "react";
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


// export default class Slider extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             activeIndex:0,
//             carouselItems:[
//                 {
//                     title:"Item 1",
//                     text:"This is space for text",                    
//                 },
//                 {
//                     title:"Item 2",
//                     text:"This is space for text",                    
//                 },
//                 {
//                     title:"Item 3",
//                     text:"This is space for text",                    
//                 },
//                 {
//                     title:"Item 4",
//                     text:"This is space for text",                    
//                 },
//                 {
//                     title:"Item 5",
//                     text:"This is space for text",                    
//                 },
//             ]
//         }
//     }


//     _renderItem({item}){
//         return(
//             <View
//             style={{
//                 backgroundColor: "lightblue",
//                 borderRadius: 5,
//                 height: 250,
//                 padding: 50,
//                 marginLeft: 25,
//                 marginRight: 25,
//             }}>
//                 <Text style={{fontSize: 30,}}> {item.title} </Text>
//                 <Text>{item.text}</Text>
//             </View>
//         )
//     }
//     render(){
//         return(
//             <SafeAreaView style={{flex:1}}>
//                 <View style={{ flex:1, flexDirection:'row', justifyContent:'center'}}>
//                     <Carousel
//                     layout={'tinder'} layoutCardOffset={`9`}
//                     data={this.state.carouselItems}
//                     sliderWidth={300}
//                     itemWidth={300}
//                     renderItem={this_renderItem}
//                     />
//                 </View>
//             </SafeAreaView>
//         );
//     }
// }