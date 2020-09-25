import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { create_api } from '@relateddigital/visilabs-react-native'
import { add } from 'react-native-reanimated';

class BottomProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom_product: this.props.route.params.products_data,
            number: 1,
            basket: [],
            oldDatainStorage: [],
            newData: []

        }
    }
    componentDidMount = async () => {
        let todaysDate = new Date().getDate();

        const productView = {
            'OM.siteID': '4C514C35383967586E56413D',
            'OM.cookieID': 'EVALYQHYOFEYXYEP20200903175229',
            'OM.oid': '46437177476C676D3745303D',
            'OM.pv': this.state.bottom_product.id,
            'OM.pn': this.state.bottom_product.name,
            'OM.inv': this.state.bottom_product.status,
            'OM.pvt': todaysDate,
            'OM.ppr': this.state.bottom_product.price,
            'OM.pv.2': this.state.bottom_product.id,
            'OM.exVisitorID': '190',
            'OM.title': this.state.bottom_product.name,
            'OM.lvt': todaysDate,
          }
          let query = Object.keys(productView)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(productView[k]))
        .join('&');

        pvUrl = `https://lgr.visilabs.net/supporttest/om.gif?${query}`
       // this.handleReq()

        this.handleRequest()
        this.setState({
            oldDatainStorage: await AsyncStorage.getItem('basket'),
        })
    }

    Basket = async (data) => {
        try {
            let newArray = []
            if (JSON.parse(this.state.oldDatainStorage) != null) {
                newArray = JSON.parse(this.state.oldDatainStorage);
            }
            newArray.push(data)
            this.setState({
                basket: newArray
            }, function () {
                this.writeToStorage()
            })

        } catch (err) {
            console.log(err)
        }
        let todaysDate = new Date().getDate();

        const addToCart = {
            'OM.siteID': '4C514C35383967586E56413D',
            'OM.cookieID': 'EVALYQHYOFEYXYEP20200903175229',
            'OM.oid': '46437177476C676D3745303D',
            'OM.pvt': todaysDate,
            'OM.pb': this.state.bottom_product.id,
            'OM.pu': this.state.bottom_product.status,
            'OM.ppr': this.state.bottom_product.price,
            'OM.pb.2': this.state.bottom_product.id,
            'OM.lvt': todaysDate,
            'OM.exVisitorID': '190',
          }
          let query = Object.keys(addToCart)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(addToCart[k]))
          .join('&');
  
          pvUrl = `https://lgr.visilabs.net/supporttest/om.gif?${query}`
         // this.handleReq()
  
          this.handleRequest()
  
        alert('The product was added to your basket')
    }
    handleRequest = async () => {
        const response = await fetch(pvUrl);
            //console.log(response);  
    }
    writeToStorage = async () => {
        await AsyncStorage.setItem('basket', JSON.stringify(this.state.basket))
    }
    Minus(cur_number) {
        if (this.state.number > 0)
            cur_number--
        this.setState({
            number: cur_number
        })
    }
    Plus(cur_number) {
        cur_number++
        this.setState({
            number: cur_number
        })
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <ScrollView>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={{
                            flex: 3,
                            backgroundColor: '#b00020',
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                            paddingHorizontal: 20,
                            paddingVertical: 30,
                        }}
                    >



                        <Image
                            source={{ uri: 'https://store.therelated.com/media/catalog/product' + this.state.bottom_product.custom_attributes[0].value }}
                            style={{ width: 250, height: 250, borderRadius: 30, marginRight: 'auto', marginLeft: 'auto', flex: 1 }}
                        />
                        <Text style={{
                            marginLeft: 10, fontSize: 14,
                            textAlignVertical:
                                "center",
                            color: 'white'
                        }}>
                            {this.state.bottom_product.name}

                        </Text>
                        <Text style={{
                            marginLeft: 10, fontSize: 25,
                            textAlignVertical:
                                "center",
                            color: 'white'
                        }}>
                            Price: {this.state.bottom_product.price} TL
                        </Text>
                        <Text style={{
                            marginLeft: 10, fontSize: 14,
                            textAlignVertical:
                                "center",
                            color: 'white'
                        }}>
                            ID of the product: {this.state.bottom_product.id}
                        </Text>


                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome
                                name="minus"
                                color='white'
                                size={20}
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto', marginTop: 45
                                }}
                                onPress={() => this.Minus(this.state.number)}
                            />
                            <Text style={{ marginTop: 45, color: 'white' }}>  {this.state.number} </Text>
                            <FontAwesome
                                name="plus"
                                color='white'
                                size={20}
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto', marginTop: 45
                                }}
                                onPress={() => this.Plus(this.state.number)}
                            />
                        </View>
                        <View>
                            <View style={{
                                flex: 0,
                                justifyContent: 'flex-end',
                                paddingHorizontal: 20,
                                backgroundColor: '#b00020'
                            }}>

                                <FontAwesome
                                    name="shopping-bag"
                                    color='white'
                                    size={50}
                                    style={{
                                        marginLeft: 'auto',
                                        marginRight: 'auto', marginTop: 25
                                    }}
                                    onPress={() => this.Basket(this.state.bottom_product)}
                                />
                            </View>
                            <Button
                                title="Add to my basket"
                                backgroundColor='#b00020'
                                color='white'
                                onPress={() => this.Basket(this.state.bottom_product)}
                            />

                        </View>
                    </Animatable.View>
                </ScrollView>
            </View>
        )


    }

};

export default BottomProducts;

const viewStyles = {
    flex: 1,
    alignItems: 'center'
};
const buttonStyles = StyleSheet.create({
    core: {
        borderStyle: 'solid',
        borderColor: '#d5d5d5',
        borderWidth: 1,
        backgroundColor: '#b00020',
        borderRadius: 30,
        padding: 15,
        paddingLeft: 15,
        paddingRight: 5
    },
    primary: {
        backgroundColor: '#b00020',
        borderColor: '#bbbbbb'
    },
    hairlineBorder: {
        borderWidth: StyleSheet.hairlineWidth
    },
    spacer: {
        marginBottom: 10
    }
});