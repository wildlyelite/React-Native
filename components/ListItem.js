import { View,Text,Pressable } from "react-native";

export default function ListItem(props){

    
    return(
        <Pressable id={props.index}  onPress={props.delet.bind(this,props.index)}>
            <View style={{borderRadius:10,margin:5,borderBottomWidth:1,borderColor:'#111',borderStyle:'dashed',padding:5}} id={props.index}>
        <Text  id={props.index} style={{fontSize: 20,color:'#ffffff',fontWeight:'300',fontFamily:'Roboto'}}>{props.index }. { props.item}
        </Text>
        </View>
        </Pressable>
        
    )
}