import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList } from 'react-native';
import ListItem from './components/ListItem';
import InputList from './components/InputList';


export default function app() {
    const [goalsarray, setgoalsarray] = useState([]);

  

    function addgoals(enteredGoalText) {
        setgoalsarray((currentgoals) => [
            ...currentgoals, { text: enteredGoalText, id: Math.random().toString() },
        ])

    }



    
  function del(id) {
    
    setgoalsarray((currentCourseGoals) => {
    //     console.log(currentCourseGoals)
    //   return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

    return(
        <View style={{paddingHorizontal:10,paddingVertical:50,flex:1,backgroundColor:'#A7727D'}} >
            <Text style={{color:'#fff',fontWeight:'600',fontSize:50,textAlign:'center',marginVertical:10,fontFamily:'serif'}}>TO-DO LIST</Text>
          
        <InputList fun={addgoals} />
           <View style={{marginTop:10,borderTopColor:'#cccccccc',borderTopWidth:1,paddingTop:10,flex:5}}>
           {/* <ScrollView>
           {goalsarray.map((goal,index)=>
           <View style={{borderRadius:'25%',margin:5}} onPress={this.delet} key={index+=1 }>
           <Text style={{fontSize: 20,color:'#ffffff',fontWeight:'300'}}>{index+=1 }. { goal}
           </Text>
           </View>
           )}
           </ScrollView> */}

           <FlatList data={goalsarray}    renderItem={(itemdata)=>{
            
            return  <ListItem  index={itemdata.index+=1} item={itemdata.item.text} delet={del} />;

        
           }}/>

           </View>
           
           

           
        </View>
    )
}

