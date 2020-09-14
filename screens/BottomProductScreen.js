import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button,Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class BottomProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom_product: this.props.route.params.products_data
        }
    }

    
    Basket = (item) => {
        
        this.props.navigation.push('Basket', {
           data: item
        })

    }
    render() {
        return(
            <View style={{backgroundColor: 'white'}}>
                <ScrollView>
               <Animatable.View 
                    animation="fadeInUpBig"
                    style={{flex: 3,
                        backgroundColor: '#b00020',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        paddingHorizontal: 20,
                        paddingVertical: 30,
                    }}
                >
               
                     
                    
                         <Image 
                        source={{uri: 'https://store.therelated.com/media/catalog/product' + this.state.bottom_product.custom_attributes[0].value}}
                        style={{ width: 350, height: 350 ,borderRadius: 30}}
                        /> 
                        <Text style={{
                            marginLeft: 10, fontSize: 14,
                            textAlignVertical:
                                "center",
                            color: 'white'
                        }}>
                        {this.state.bottom_product.name}
                        
                        </Text>
                        <Text style={{
                            marginLeft: 10, fontSize: 25,
                            textAlignVertical:
                                "center",
                            color: 'white'
                        }}>
                        Price: {this.state.bottom_product.price} TL
                        </Text>
                        <Text style={{
                            marginLeft: 10, fontSize: 14,
                            textAlignVertical:
                                "center",
                            color: 'white'
                        }}>
                        ID of the product: {this.state.bottom_product.id} 
                        </Text>
                   
                       
                <View>
                <View style={{flex: 0,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 20,
                    backgroundColor: '#b00020'
                    }}>

               <FontAwesome 
                    name="shopping-bag"
                    color='white'
                    size={50}
                    style ={{marginLeft: 'auto',
                    marginRight: 'auto',marginTop: 45}}
                    onPress ={()=>this.Basket(this.state.bottom_product)}
                    />  
                </View>
                <Button
                title = "Add to my basket"
                backgroundColor = '#b00020'
                color= 'white'
                onPress ={()=>this.Basket(this.state.bottom_product)}
                />
                
                </View>
                </Animatable.View>
                </ScrollView>
                </View>
            )
            
        
    }

};

export default BottomProducts;

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