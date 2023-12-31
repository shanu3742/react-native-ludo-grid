import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const ludoBoxDimension={
  width:350,
  height:380,
  gridWidth:80,
  gridHeight:80
}
const HorizontalCard = () => {
    //red,green,yellow,blue
    let CardCord= [[],[],[],[]]
    for(let i=0;i<CardCord.length;i++){
      for(let j=0;j<18;j++){
        let gridObject= {
            index:j+1,
          
        }
        if(i===0){
            gridObject.colorGrid='green-grid'
            if(j<5){
                gridObject.position='top-left'
                gridObject.moving='decrement'
            }else if(j<9){
                gridObject.position='top-right'
                gridObject.moving='increment'
            }else{
                gridObject.position='top-center'
                gridObject.moving='increment'
            }

        }
        else if(i===1){
            gridObject.colorGrid='red-grid'
            if(j<5){
                gridObject.position='bottom-left'
                gridObject.moving='increment'
            }else if(j<9){
                gridObject.position='bottom-right'
                gridObject.moving='decrement'
            }else{
                gridObject.position='bottom-center'
                gridObject.moving='increment'
            }

        }
        else if(i===2){
            gridObject.colorGrid='yellow-grid'
            if(j<5){
                gridObject.position='left-top'
                gridObject.moving='increment'
            }else if(j<9){
                gridObject.position='left-bottom'
                gridObject.moving='decrement'
            }else{
                gridObject.position='left-center'
                gridObject.moving='increment'
            }

        }
        else if(i===3){
            gridObject.colorGrid='blue-grid'
            if(j<5){
                gridObject.position='right-top'
                gridObject.moving='decrement'
            }else if(j<9){
                gridObject.position='right-bottom'
                gridObject.moving='increment'
            }else{
                gridObject.position='right-center'
                gridObject.moving='increment'
            }

        }

        CardCord[i].push(gridObject)
      
      }
    }
    console.log(CardCord)
    const players= {
      playerOne:{
        name:'shanu',
        coin:[[],[],[],[]]
      },
      playerTwo:{
        name:'shanu1',
        coin:[[],[],[],[]]
      },
      playerThree:{
        name:'shanu2',
        coin:[[],[],[],[]]
      },
      playerFour:{
        name:'shanu2',
        coin:[[],[],[],[]]
      }
    }
    const colorizeGridCard = (i,gridIndex) => {
       if(i===0 && gridIndex===13){
        return 'transparentBox'
      }
      if(i===1 && gridIndex===4){
        return 'transparentBox'
      }
       if(i===2 && gridIndex===1){
        return 'transparentBox'
      }    
       if(i===3 && gridIndex===16){
        return 'transparentBox'
      }
      
      if(i!==1&& i!==3){
        if(gridIndex>6 && gridIndex<12){
          return 'transparentBox'
        }else{
          return 'whiteColor'
        }

      }else{
        if(gridIndex>5&& gridIndex<11){
          return 'transparentBox'
        }else{
          return 'whiteColor'
        }
      }
      // i!==1&& i!==3?gridIndex>6&& gridIndex<12?'transparentBox':'whiteColor':gridIndex>5&& gridIndex<11?'transparentBox':'whiteColor'

    }
    const getStar = (i,gridIndex) => {
      if(i===0&& gridIndex===1){
        return '✡️'
      }
      if(i===1 && gridIndex===16){
         return '✡️'
      }
         if(i===2 && gridIndex===13){
         return '✡️'
      }
       if(i===3 && gridIndex===4){
         return '✡️'
      }
       return ''//gridIndex
    }
  return (
  <View style={styles.ludoContainer}>
    <View  style={[styles.resultBox,styles.allSideBorder]}>

    </View>

   {
    CardCord.map((el,i) => {
        return   <View key={`playing-area-${i}`} style={styles[`playingArea${i}`]}>
           {
            el.map((gridItem,gridIndex) => {
                return   <View style={[styles[`gridBox${i}`],styles[colorizeGridCard(i,gridIndex) ]]} key={`playing-area-${i}-grid-item=${gridIndex}`}>
                <Text>{getStar(i,gridIndex)}</Text>
            </View>
            })
           }
          

        </View>
    })
   }
   {
    Object.keys(players).map((el,i) => {
      return <View key={`palyer-home-${i}`} style={styles[`playerHome${i+1}`]}>
        <Text>{players[el]?.name}</Text>
        <View style={styles['gridCard']}>
        {
          players[el]?.coin.map((coins,coinsIndex) => {
            return <View style={[styles.gridCardBox1,styles.allSideBorder]}>
              <Text style={styles[i===0?'greenLudoCoin':i===1?'redLudoCoin':i===3?'yellowLudoCoin':'blueLudoCoin']}>⛳</Text>
            </View>
          })
        }
        </View>


      </View>
    })
   }

  </View>
  )
}
const styles = StyleSheet.create({
  redColor:{
   backgroundColor:'#f77777'
  },
  greenColor:{
    backgroundColor:'#91c898'
   },
   yellowColor:{
    backgroundColor:'#f7f1a9'
   },
   whiteColor:{
    backgroundColor:'white',
    // textAlign:'center',
    alignItems:'center',
    justifyContent:'center'
   },
   transparentBox:{
backgroundColor:'transparent'
   },
  ludoContainer: {
    width: ludoBoxDimension.width,
    height: ludoBoxDimension.height,
    borderTopWidth: 1,
    borderColor: "black",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  resultBox: {
    width: ludoBoxDimension.gridWidth,
    height: ludoBoxDimension.gridHeight,
  },
  allSideBorder: {
    borderColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  playingArea0: {
    position: "absolute",
    height: ludoBoxDimension.width / 2 - 1 - ludoBoxDimension.gridHeight / 2,
    width: ludoBoxDimension.gridHeight,
    backgroundColor: "#91c898",
    top: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 1,
    flexDirection: "column",
    flexWrap:'wrap'
  },
  playingArea1: {
    position: "absolute",
    height: ludoBoxDimension.width / 2 - 1 - ludoBoxDimension.gridWidth / 2,
    width: ludoBoxDimension.gridWidth,
    backgroundColor: "#f77777",
    bottom: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 1,
    flexDirection: "column",
    flexWrap:'wrap'
  },
  playingArea2: {
    position: "absolute",
    top: ludoBoxDimension.width / 2 - 1 - ludoBoxDimension.gridWidth / 2,
    left: 0,
    width: ludoBoxDimension.width / 2 - 1 - ludoBoxDimension.gridWidth/ 2,
    height: ludoBoxDimension.gridWidth,
    backgroundColor: "#f7f1a9",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    flexWrap:'wrap'
  },

  playingArea3: {
    position: "absolute",
    top: ludoBoxDimension.width / 2 - 1 - ludoBoxDimension.gridWidth / 2,
    right: 0,
    width: ludoBoxDimension.width / 2 - 1 -  ludoBoxDimension.gridWidth  / 2,
    height:  ludoBoxDimension.gridWidth ,
    backgroundColor: "#78afdd",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    flexWrap:'wrap'
    
  },
  gridBox0: {
    height:`${100/6}%`,
    // backgroundColor:'pink',
    width:( ludoBoxDimension.gridWidth /3)-1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
 
   
  },
  gridBox1: {
    height:`${100/6}%`,
    // backgroundColor:'pink',
    width:( ludoBoxDimension.gridWidth /3)-1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
   
  },
  gridBox2:{
    width:`${100/6}%`,
    height:( ludoBoxDimension.gridWidth /3)-1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  gridBox3:{
    width:`${100/6}%`,
    height:( ludoBoxDimension.gridWidth /3)-1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  playerHome1:{
    position:'absolute',
    top:0,
    width:(ludoBoxDimension.width /2)- ludoBoxDimension.gridWidth /2,
    height:(ludoBoxDimension.width /2)-( ludoBoxDimension.gridWidth /2)-1,
    backgroundColor:'#91c898',
    right:0

  },
  playerHome2:{
    position:'absolute',
     bottom:0,
    width:(ludoBoxDimension.width /2)-( ludoBoxDimension.gridWidth /2)-1,
    height:(ludoBoxDimension.width /2)-( ludoBoxDimension.gridWidth /2)-1,
    backgroundColor:'#f77777',
    left:0

  },
  playerHome3:{
    position:'absolute',
     bottom:0,
    width:(ludoBoxDimension.width /2)-( ludoBoxDimension.gridWidth /2)-1,
    height:(ludoBoxDimension.width /2)-( ludoBoxDimension.gridWidth /2)-1,
    backgroundColor:'#78afdd',
    right:0

  },
  playerHome4:{
    position:'absolute',
     top:0,
    width:(ludoBoxDimension.width /2)-( ludoBoxDimension.gridWidth /2)-1,
    height:(ludoBoxDimension.width /2)-( ludoBoxDimension.gridWidth /2)-1,
    backgroundColor:'#f7f1a9',
    left:0

  },
  gridCard:{
    width:90,
    height:90 ,
    backgroundColor:'white',
    marginLeft:20,
    // flex:1,
    // display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    // paddingEnd:5,
    paddingStart:2,
    paddingTop:10,
    // paddingTop:10
    alignItems:'center',
    justifyContent:'center'


  },
  gridCardBox1:{
    width:30,
    height:30,
    marginBottom:2,
    marginLeft:2,
    marginRight:2,
    marginTop:2,
    
  },
  redLudoCoin:{
  backgroundColor:'#f77777',
  width:20,
  height:20,
  borderRadius:20/2,
  alignItems:'center',
  justifyContent:'center',
  marginLeft:3,
  marginTop:3
  },
  greenLudoCoin:{
    backgroundColor:'#91c898',
    width:20,
    height:20,
    borderRadius:20/2,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:3,
    marginTop:3
    },
    yellowLudoCoin:{
      backgroundColor:'#f7f1a9',
      width:20,
      height:20,
      borderRadius:20/2,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:3,
      marginTop:3
      },
      blueLudoCoin:{
        backgroundColor:'#78afdd',
        width:20,
        height:20,
        borderRadius:20/2,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:3,
        marginTop:3
        }

});

export default HorizontalCard