import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const HorizontalCard = () => {
    //red,green,yellow,blue
    let CardCord= [[],[],[],[]]
    for(let i=0;i<CardCord.length;i++){
      for(let j=0;j<15;j++){
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
  return (
  <View style={styles.ludoContainer}>
    <View  style={[styles.resultBox,styles.allSideBorder]}>

    </View>

   {
    CardCord.map((el,i) => {
        return   <View key={`playing-area-${i}`} style={styles[`playingArea${i}`]}>
           {
            el.map((gridItem,gridIndex) => {
                return   <View style={styles[`gridBox${i}`]} key={`playing-area-${i}-grid-item=${gridIndex}`}>
                <Text></Text>
            </View>
            })
           }
          

        </View>
    })
   }

  </View>
  )
}
const styles = StyleSheet.create({
  ludoContainer: {
    width: 300,
    height: 100,
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
    width: 50,
    height: 50,
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
    height: 300 / 2 - 1 - 50 / 2,
    width: 50,
    backgroundColor: "green",
    top: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 1,
    flexDirection: "column",
    flexWrap:'wrap'
  },
  playingArea1: {
    position: "absolute",
    height: 300 / 2 - 1 - 50 / 2,
    width: 50,
    backgroundColor: "red",
    bottom: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 1,
    flexDirection: "column",
    flexWrap:'wrap'
  },
  playingArea2: {
    position: "absolute",
    top: 300 / 2 - 1 - 50 / 2,
    left: 0,
    width: 300 / 2 - 1 - 50 / 2,
    height: 50,
    backgroundColor: "yellow",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    flexWrap:'wrap'
  },

  playingArea3: {
    position: "absolute",
    top: 300 / 2 - 1 - 50 / 2,
    right: 0,
    width: 300 / 2 - 1 - 50 / 2,
    height: 50,
    backgroundColor: "blue",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    flexWrap:'wrap'
    
  },
  gridBox0: {
    height:`${100/5}%`,
    // backgroundColor:'pink',
    width:(50/3)-1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
 
   
  },
  gridBox1: {
    height:`${100/5}%`,
    // backgroundColor:'pink',
    width:(50/3)-1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
   
  },
  gridBox2:{
    width:`${100/5}%`,
    height:(50/3)-1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  gridBox3:{
    width:`${100/5}%`,
    height:(50/3)-1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  }


});

export default HorizontalCard