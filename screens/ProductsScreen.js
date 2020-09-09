import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button,Image } from 'react-native';
import BottomProductScreen from './BottomProductScreen';
import { ScrollView } from 'react-native-gesture-handler';


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
            //console.log({ setStateUp: "worked!" })
                this.setState({
                    products: json.items
                })
                console.log(json)
            });

    }

    onPress = (data) => {

        this.props.navigation.push('BottomProducts', {
            products_data: data
        })
    }
    render() {
            return (this.state.products.map((data, index) =>
                
               
                <TouchableOpacity key={index} style={{
                    backgroundColor: "#bbbbbb", margin: 2,
                    padding: 15,borderRadius: 75
                }} onPress={() => this.onPress(data)}
                >
                    <View style={{ flexDirection: "row" }}
                        title={data.name}
                    >   
                    <ScrollView>
                         <Image 
                        source={{uri: 'https://store.therelated.com/media/catalog/product' + data.custom_attributes[0].value}}
                        style={{ width: 100, height: 100 ,borderRadius: 30}}
                        /> 
                        <Text style={{
                            marginLeft: 10, fontSize: 16,
                            textAlignVertical: "center",
                            flex: 1    
                        }}>{data.name}
                        
                        </Text>
                        </ScrollView>
                    </View>
                </TouchableOpacity>
                

            )
            )   
    }
};

export default Products;