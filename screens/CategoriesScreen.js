


import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { goBack } from '@react-navigation/routers/lib/typescript/src/CommonActions';
import ProductsScreen from './ProductsScreen';
import ViewProductsScreen from './ViewProductsScreen';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.route.params.currentData != null ? this.props.route.params.currentData.children_data : [],
            itemID: this.props.route.params.itemid != null ? this.props.route.params.itemid : "",
        };
    }

    componentDidMount = () => {
        if (this.props.route.params.currentData != null) return;
        fetch('https://store.therelated.com/rest/V1/categories', {
            method: 'get',
            header: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    categories: json.children_data
                })
            });

    }

    onPress = (data) => {
        let currentData = this.state.categories.filter(a => a.name == data.name)[0]
        if (currentData.children_data.length >= 1) {
            this.props.navigation.push('Categories', {
                itemid: data.id,
                currentData: currentData
            })
        }
        else {
            //console.log({ navigateToProducts: "worked!" })
            this.props.navigation.push('Products', {
                cat_id: data.id
            })
        }




    }

    viewProduct = (data) => {
        let id_array = [];


        if (data.children_data.length != 0) {

            for (var i = 0; i < data.children_data.length; i++) {

                let new_data = data.children_data[i].children_data

                if (data.children_data[i].children_data.length != 0) {
                    for (var j = 0; j < data.children_data[i].children_data.length; j++) {

                        id_array[j] = new_data[j].id


                    }

                } else {

                    id_array[i] = data.children_data[i].id
                }
               
            }


        }


        this.props.navigation.push('ViewProducts', {
            cat: id_array
        })


        /*this.props.navigation.push('Products', {
            cat_id: data.children_data.children_data.id
    })*/

    }

    render() {
        if (this.state.categories.length >= 8) {
            this.state.categories.splice(0, 1)

        }
        return this.state.categories.map((data, index) =>
         
           <View>
            
             <TouchableOpacity key={index === 0 ? 1 : index} style={{
                backgroundColor: "#bbbbbb", margin: 2,
                padding: 15, borderRadius: 30
            }} onPress={() => this.onPress(data)}>
                <View style={{ flexDirection: "row" }}
                    title={data.name}>
                    <Text style={{
                        marginLeft: 10, fontSize: 18,
                        textAlignVertical:
                            "center"
                    }}>{data.name} and {data.id}</Text>
                    <Button
                        title="View Products"
                        onPress={() => this.viewProduct(data)}
                    />
                </View>


            </TouchableOpacity>
            
            </View>
            

        )





    }
};

export default Categories;