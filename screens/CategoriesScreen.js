


import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button } from 'react-native';
import { NavigationContainer, StackActions, setOptions, navigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from './ProductsScreen';
import ViewProductsScreen from './ViewProductsScreen';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';



const Stack = createStackNavigator();

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.route.params.currentData != null ? this.props.route.params.currentData.children_data : [],
            itemID: this.props.route.params.itemid != null ? this.props.route.params.itemid : "",
        };
        this.props.navigation.setOptions({
            title: this.props.route.params.title
        })
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

    /*   useLayoutEffect = (() => {
          navigation.setOptions({
            title: this.state.categories.name,
          });
        }, [navigation, this.state.categories.name]);
       */

    onPress = (data) => {
        let currentData = this.state.categories.filter(a => a.name == data.name)[0]
        if (currentData.children_data.length >= 1) {
            this.props.navigation.push('Categories', {
                itemid: data.id,
                currentData: currentData,
                title: data.name
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
            var n = 0;
            for (var i = 0; i < data.children_data.length; i++) {

                let new_data = data.children_data[i].children_data

                if (data.children_data[i].children_data.length != 0) {

                    for (var j = 0; j < data.children_data[i].children_data.length; j++) {

                        id_array[n] = new_data[j].id
                        n++

                    }

                } else {

                    id_array[n] = data.children_data[i].id
                    n++
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

        return (<FlatList
            data={this.state.categories}

            renderItem={({ item, index }) => <View>
                <Animatable.View 
                    animation="fadeInUpBig"
                    style={{flex: 0,
                        backgroundColor: 'white',
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}
                >
                <TouchableOpacity key={index === 0 ? 1 : index} style={{
                    backgroundColor: "#b00020", margin: 2,
                    padding: 15, borderRadius: 30
                }} onPress={() => this.onPress(item)}>
                    <View style={{ flexDirection: "row" }}
                        title={item.name}>
                        <Text style={{
                            marginLeft: 10, fontSize: 18,
                            textAlignVertical: "center",
                            color: 'white'
                        }}>{item.name}</Text>

                        <FontAwesome
                            name="dot-circle-o"
                            color='black'
                            size={35}
                            style={{
                                marginLeft: 'auto'
                            }}
                            onPress={() => this.viewProduct(item)}
                        />
                        {/*  <Button
                       title="View Products"
                       onPress={() => this.viewProduct(item)}
                   /> */}
                    </View>


                </TouchableOpacity>
            </Animatable.View>
            </View>}
        />
        )
    }
};

export default Categories;