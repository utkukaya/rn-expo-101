import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button,Image } from 'react-native';

class BottomProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom_product: this.props.route.params.bottom_product
        }
    }
    /* componentDidMount = () => {
        fetch(`https://store.therelated.com/rest/V1/products?fields=items[id,sku,name,price,visibility,custom_attributes,extension_attributes]&searchCriteria[pageSize]=100&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${this.state.data_id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`, {
            method: 'get',
            header: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log({ setStateUp: "worked!" })
                this.setState({
                    products: json.items
                })
                // console.log(json.items)
            });

    } */

    
    render() {
        //let control_id = this.state.categories.filter(a.id === 2)
        //if(control_id){
  
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