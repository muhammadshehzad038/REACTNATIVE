import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button, TouchableOpacity, } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
    <TouchableOpacity>
      
       <Image style={{width:500, height:500, backgroundColor:'pink', borderRadius:40}} source={require('./assets/img.jpg')}></Image>
      </TouchableOpacity>

      <Text><h1><i>Instagram</i> </h1></Text>
  
       <View style={{padding: 10}}>  
                <TextInput  
                    style={{height: 40 ,width:400,backgroundColor: 'pink', fontSize: 20}}  
                    placeholder=" Enter Username"  
                    placeholderTextColor={'black'}
                 
                />  
               
            </View>  
            <View style={{padding: 20}}>  
                <TextInput  
                    style={{height: 40 ,width:400 ,backgroundColor: 'pink', fontSize: 20 , borderColor:'black'}}  
                    secureTextEntry={'hidePassword'}
                    placeholder=" Enter password"  
                    placeholderTextColor={'black'}
                    autoCompleteType="password"
     >         
  
                </TextInput>
               
            </View> 
            <View style={{width:400, height: 100, marginTop: 10, borderRadius:40}}>
<TouchableOpacity>
              <Button
                onPress={() => {
                  alert('You have sucessfull login in!');
                }}
                title="sign in"
                color={'pink'}
            

              >

              </Button>
              </TouchableOpacity>
              
              <Text><h3>                                            OR             </h3></Text>
              <TouchableOpacity>
                <Text style={{color:"black" , }}><h3>                             login with facebook</h3></Text>
              </TouchableOpacity>
              
            </View>
           




    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
