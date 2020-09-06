import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button,Image } from 'react-native';

class BottomProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom_product: this.props.route.params.bottom_product
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
                        source={{uri: 'https://store.therelated.com/media/catalog/product' + this.state.bottom_product}}
                        style={{ width: 400, height: 400 }}
                        /> 
                        <Text style={{
                            marginLeft: 10, fontSize: 18,
                            textAlignVertical:
                                "center"
                        }}>{this.state.bottom_product}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
            
        
    }

};

export default BottomProducts;