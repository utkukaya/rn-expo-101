import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button, Image, ScrollView } from 'react-native';
import BottomProductScreen from './BottomProductScreen';


class ViewProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cat_data: this.props.route.params.cat
        }
    }
    componentDidMount = () => {
        let newArray = this.state.cat_data
       
        fetch(`https://store.therelated.com/rest/V1/products?fields=items[id,sku,name,price,visibility,custom_attributes,extension_attributes]&searchCriteria[pageSize]=100&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${this.state.cat_data}&searchCriteria[filter_groups][0][filters][0][condition_type]=in`, {
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
                
            });

    }

    onPress = (data) => {

        this.props.navigation.push('BottomProducts', {
            products_data: data
        })
    }

    getListViewItem = (item) => {  
        alert('UTKU');  
    }

    render() {
        return(
            <FlatList
            data = {this.state.categories}
            rendernItem={({item}) => <Text>
            item: {item.name}
            </Text>}
            />
            
            
            
            /* this.state.products.map((data, index) =>
            
            <TouchableOpacity key={index} style={{
                backgroundColor: "#bbbbbb", margin: 2,
                padding: 15, borderRadius: 75
            }} onPress={() => this.onPress(data)}
            >
               
                
                
                <View style={{ flexDirection: "row" }}
                    title={data.name}
                >
                  
                    <Image
                        source={{ uri: 'https://store.therelated.com/media/catalog/product' + data.custom_attributes[0].value }}
                        style={{ width: 100, height: 100, borderRadius: 30 }}
                    />
                    <FlatList  
                    data={data}  
                    renderItem={({data}) =>  
                        <Text  
                              onPress={this.getListViewItem.bind(this, data)}>{data.name}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
                     <Text style={{
                        marginLeft: 10, fontSize: 16,
                        textAlignVertical: "center",
                        flex: 1
                    }}>{data.name}

                    </Text> 
                   
                </View>
                
            </TouchableOpacity>
             */
            
        )
        
        
        
    }
};

export default ViewProducts;