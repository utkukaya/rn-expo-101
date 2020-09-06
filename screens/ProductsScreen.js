import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button,Image } from 'react-native';
import BottomProductScreen from './BottomProductScreen';


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            data_id: this.props.route.params.cat_id
        }
    }
    componentDidMount = () => {
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

    }

    onPress = (value) => {

        this.props.navigation.push('BottomProducts', {
            products_data: value
        })


    }
    render() {
        //let control_id = this.state.categories.filter(a.id === 2)
        //if(control_id){
  
            return (this.state.products.map((data, index) =>
                <TouchableOpacity key={index} style={{
                    backgroundColor: "#D8BFD8", margin: 2,
                    padding: 15
                }} onPress={() => this.onPress(data.custom_attributes[0].value)}
                >
                    <View style={{ flexDirection: "row" }}
                        title={data.name}
                    >   
                         <Image 
                        source={{uri: 'https://store.therelated.com/media/catalog/product' + data.custom_attributes[0].value}}
                        style={{ width: 100, height: 100 }}
                        /> 
                        <Text style={{
                            marginLeft: 10, fontSize: 18,
                            textAlignVertical:
                                "center"
                        }}>{data.name} and price: {data.price} tl
                        and the url {data.custom_attributes[0].value}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
            )
        
    }

};

export default Products;