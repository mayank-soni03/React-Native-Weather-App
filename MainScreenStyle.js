import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    BGcolor: {
      backgroundColor: "black",
      width: "100%", 
      height: "100%"
    },
    loadingView:{
      flex:'1',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    loadingText:{
      color:'white',
      fontSize:'36px',
      lineHeight:'40px'
    },
    ScrollView:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'96px',
      borderRadius:'24px',
      paddingBottom:'12px',
      paddingTop:'12px',
      marginTop:'40px',
      marginRight:'16px',
      backgroundColor:'rgba(255,255,255,0.15)'
    },
    ScrollViewImg: {
      height:'44px',
      width:'44px',
    },
    ScrollViewText: {
      color:'white',
      fontSize:'20px',
      lineHeight:'28px',
      fontWeight:'600'
    },
    forecast: {
      marginBottom:'8px',
      marginTop:'35px',
    },
    forecast2: {
      flexDirection:'row',
      alignItems:'center',
      marginLeft:'20px',
      marginRight:'20px',
      marginLeft:'8px'
    },
    forecastText: {
      color:'white',
      fontSize:'16px',
      lineHeight:'24px',
      marginLeft:'8px'
    },
    otherStats: {
      flexDirection:'row',
      justifyContent:'space-between',
      marginLeft:'16px',
      marginRight:'16px'
    },
    otherStats2: {
      flexDirection:'row',
      marginLeft:'8px',
      alignItems:'center'
    },
    otherStatsImg:{
      height:'24px',
      width:'24px',
      marginTop:'50px'
    },
    otherStatstext:{
      color:'white',
      fontWeight:'600',
      fontSize:'16px',
      lineHeight:'24px',
      marginTop:'46px',
      marginLeft:'10px'
    },
    degreeView: {
      marginTop:'8px',
    },
    degreeText: {
      textAlign:'center',
      fontWeight:'bold',
      color:'white',
      fontSize:'60px',
      lineHeight:'1',
      marginLeft:'15px'
    },
    degreeText2: {
      textAlign:'center',
      color:'white',
      fontSize:'15px',
      lineHeight:'1',
      marginLeft:'5px',
      marginTop:'6px',
      letterSpacing:'0.1em'
    },
    partlycloudimg:{
      width:'200px',
      height:'200px',
      marginTop:'10px'
    },
    forecastView:{
      marginLeft:'4px',
      marginRight:'4px',
      display:'flex',
      justifyContent:'space-around',
      flex:'1 ',
      marginBottom:'2px'
    },
    SearchBy: {
      display: 'flex',
      flexDirection: 'row',
      color: 'white',
      marginTop: "10px",
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: "95%",
      maxWidth: "700px",
    },
    Mar: {
      height: "7%",
      marginLeft: "0",
      marginRight: "0",
      position: 'relative',
      zIndex: "50"
    },
    SearchBox: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderRadius:'20px',
      marginLeft:"15px",
      marginRight:"15px",
      backgroundColor: 'rgba(255,255,255,0.2)'
    },
    TextInput: {
      paddingLeft: "30px",
      paddingBottom:"5px",
      height: "100%",
      flex: '1',
      fontSize: "20px",
      lineHeight: "30px",
      color: 'white',
      borderRadius:'20px'
    },
    TouchableOpa: {
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: '20px',
      padding:"3px",
      margin:"1px",
    },
    location: {
      position: 'absolute',
      width: '95%',
      backgroundColor: 'rgb(249,250,251)',
      top: '16px',
      borderRadius: '24px',
      marginTop:'25px',
      marginLeft:'38px',
      marginRight:'0px'
    },
    location2: {
      flexDirection:'row',
      alignItems:'center',
      padding:'3px',
      paddingLeft:'8px',
      paddingRight:'4px',
      marginBottom:'1px',
      borderBottomWidth:'2px',
      borderBottomColor:'rgb(156,163,176)',
      borderRadius:'60px',
      margin:'2px',
      marginBottom:'3px'
    },
    mapColor: {
      color:'gray',
    },
    text: {
      color:'black',
      fontSize:'18px',
      lineHeight:'28px'
    },
    text2: {
      color:'rgb(255,255,255)',
      textAlign:'center',
      fontSize:'24px',
      lineHeight:'32px',
      fontWeight:'700',
      marginTop:'40px'
    },
    text3: {
      fontSize:'18px',
      lineHeight:'28px',
      fontWeight:'500',
      color:'rgb(209,213,219)'
    },
    WeatherView:{
      flexDirection:'row',
      justifyContent:'center',      
    }
  });

  export default styles;
  