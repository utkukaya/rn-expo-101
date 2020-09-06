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
                    backgroundColor: "#D8BFD8", margin: 2,
                    padding: 15
                }}
                >
                    <View style={{ flexDirection: "row" }}

                    >   
                         <Image 
                        source={{uri: 'https://store.therelated.com/media/catalog/product' + this.state.bottom_product.custom_attributes[0].value}}
                        style={{ width: 200, height: 200 }}
                        /> 
                        
                    </View>
                    <View>
                        <Text style={{
                            marginLeft: 10, fontSize: 12,
                            textAlignVertical:
                                "center"
                        }}>
                        Product Name: {this.state.bottom_product.name}
                        
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