


import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { goBack } from '@react-navigation/routers/lib/typescript/src/CommonActions';
import ProductsScreen from './ProductsScreen';

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

    render() {
        if(this.state.categories.length >= 8){
            this.state.categories.splice(0,1)
        }
        return this.state.categories.map((data, index) =>
            <TouchableOpacity key={index === 0 ? 1:index} style={{
                backgroundColor: "#D8BFD8", margin: 2,
                padding: 15
            }} onPress={() => this.onPress(data)}>
                <View style={{ flexDirection: "row" }}
                    title={data.name}>
                    <Text style={{
                        marginLeft: 10, fontSize: 18,
                        textAlignVertical:
                            "center"
                    }}>{data.name}</Text>

                </View>
            </TouchableOpacity>
        )
    }
};

export default Categories;