import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button,Image, StyleSheet } from 'react-native';

class BottomProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom_product: this.props.route.params.products_data
        }
    }

    
    render() {
        return(
                <TouchableOpacity  style={[buttonStyles.core, buttonStyles.primary, buttonStyles.hairlineBorder, buttonStyles.spacer]}
                >
                    <View>   
                         <Image 
                        source={{uri: 'https://store.therelated.com/media/catalog/product' + this.state.bottom_product.custom_attributes[0].value}}
                        style={{ width: 350, height: 350 ,borderRadius: 30}}
                        /> 
                        
                    </View>
                    <View>
                        <Text style={{
                            marginLeft: 10, fontSize: 14,
                            textAlignVertical:
                                "center"
                        }}>
                        {this.state.bottom_product.name}
                        
                        </Text>
                        <Text style={{
                            marginLeft: 10, fontSize: 25,
                            textAlignVertical:
                                "center"
                        }}>
                        Price: {this.state.bottom_product.price} TL
                        </Text>
                        <Text style={{
                            marginLeft: 10, fontSize: 14,
                            textAlignVertical:
                                "center"
                        }}>
                        ID of the product: {this.state.bottom_product.id} 
                        </Text>
                    </View>    
                </TouchableOpacity>
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
      backgroundColor: '#bbbbbb',
      borderRadius: 30,
      padding: 15,
      paddingLeft: 15,
      paddingRight: 5
    },
    primary: {
      backgroundColor: '#bbbbbb',
      borderColor: '#bbbbbb'
    },
    hairlineBorder: {
      borderWidth: StyleSheet.hairlineWidth
    },
    spacer: {
      marginBottom: 10
    }
  });