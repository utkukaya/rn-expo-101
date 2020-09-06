import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button,Image } from 'react-native';

class BottomProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom_product: this.props.route.params.products_data
        }
    }

    
    render() {
        return(
                <TouchableOpacity  style={{
                    backgroundColor: "#bbbbbb", margin: 2,
                    padding: 15,borderRadius: 30
                }}
                >
                    <View style={{ flexDirection: "row" }}

                    >   
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
                    </View>    
                </TouchableOpacity>
            )
            
        
    }

};

export default BottomProducts;