import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button,Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.route.params.data,
            number: 1
        }
    
    }

    Buyit (){
        alert('You have bought it!!')

    }

    Minus (cur_number){
        if(this.state.number > 0)
        cur_number--
        this.setState({
            number: cur_number
            
        })
    }   
    Plus (cur_number){
        cur_number++
        this.setState({
            number: cur_number

        })
    }
    render() {
        return(
            <View style={{backgroundColor: 'white'}}>
               <ScrollView>
               <View style={{flex: 0,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 20,
                    paddingBottom: 50,
                    backgroundColor: '#b00020'
                    }}>

               <FontAwesome 
                    name="shopping-bag"
                    color='white'
                    size={50}
                    style ={{marginLeft: 'auto',
                    marginRight: 'auto',marginTop: 45}}
                    />  
                </View>
                <Animatable.View 
                    animation="fadeInUpBig"
                    style={{flex: 3,
                        backgroundColor: 'white',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        paddingHorizontal: 20,
                        paddingVertical: 30,
                    }}
                >
                   <View>   
                  
                         <Image 
                        source={{uri: 'https://store.therelated.com/media/catalog/product' + this.state.product.custom_attributes[0].value}}
                        style={{ width: 350, height: 350 ,borderRadius: 30}}
                        /> 
                        <Text style={{
                            marginLeft: 10, fontSize: 14,
                            textAlignVertical:
                                "center",
                            color: '#05375a'
                        }}>
                        {this.state.product.name}
                        
                        </Text>
                        <Text style={{
                            marginLeft: 10, fontSize: 25,
                            textAlignVertical:
                                "center",
                            color: '#05375a'
                        }}>
                        Price: {this.state.product.price} TL
                        </Text>
                        <Text style={{
                            marginLeft: 10, fontSize: 14,
                            textAlignVertical:
                                "center",
                            color: '#05375a'
                        }}>
                        ID of the product: {this.state.product.id} 
                        </Text>
                    </View>
                    <View>
                    
                        
                    </View> 
                       
                    <View style={{flexDirection: 'row'}}>
                    <FontAwesome 
                    name="minus"
                    color='#05375a'
                    size={20}
                    style ={{marginLeft: 'auto',
                    marginRight: 'auto',marginTop: 45}}
                    onPress={() => this.Minus(this.state.number)}
                    />  
                    <Text style={{marginTop: 45}}>  {this.state.number} </Text>
                    <FontAwesome 
                    name="plus"
                    color='#05375a'
                    size={20}
                    style ={{marginLeft: 'auto',
                    marginRight: 'auto',marginTop: 45}}
                    onPress={() => this.Plus(this.state.number)}
                    />  
                    </View>

                    

                    <View  style ={{backgroundColor: '#b00020',
                padding: 10,
                marginTop: 35,
                borderRadius: 10
                
                }}>

                <Button
                title = "Buy it"
                color= 'white'
                onPress ={()=>this.Buyit()}
                />
                </View>
                </Animatable.View>
                </ScrollView>
                </View>
            )
            
        
    }

};

export default Basket;

const viewStyles = {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center'
  };
  const buttonStyles = StyleSheet.create({
    core: {
      borderStyle: 'solid',
      borderColor: '#d5d5d5',
      borderWidth: 1,
      backgroundColor: '#b00020',
      borderRadius: 30,
      padding: 15,
      paddingLeft: 15,
      paddingRight: 5
    },
    primary: {
      backgroundColor: '#b00020',
      borderColor: '#bbbbbb'
    },
    hairlineBorder: {
      borderWidth: StyleSheet.hairlineWidth
    },
    spacer: {
      marginBottom: 10
    }
  });