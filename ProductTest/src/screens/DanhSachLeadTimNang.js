import React, { Component } from 'react'
import {
    ScrollView, StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, StatusBar, Image, TextInput,
    TouchableOpacity, ImageBackground
} from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import LinearGradient from 'react-native-linear-gradient';
const heightWindow = Dimensions.get('window').height - getStatusBarHeight()
const widthWindow = Dimensions.get('window').width

const DataLeads = [
    {
        key: 1,
        title: 'Nguyễn Văn B',
        chiase: 'Chia sẻ bởi Lê Lang Leo',
        diachi: 'Phường 3, Quận 5, TP.HCM',
        ava: 'https://i-vnexpress.vnecdn.net/2019/07/30/anh-thien-nhien-dep-thang-7-1564483719_680x0.jpg',
        status: 'Loẻm ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, leo purus nequ Loẻm ipsum dolor sit amet, cotetu...'
    },
    {
        key: 2,
        title: 'Nguyễn Văn B',
        chiase: 'Chia sẻ bởi Lê Lang Leo',
        diachi: 'Phường 3, Quận 5, TP.HCM',
        ava: 'https://i-vnexpress.vnecdn.net/2019/07/30/anh-thien-nhien-dep-thang-7-1564483719_680x0.jpg',
        status: 'Loẻm ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, leo purus nequ Loẻm ipsum dolor sit amet, cotetu...'
    },
    {
        key: 3,
        title: 'Nguyễn Văn B',
        chiase: 'Chia sẻ bởi Lê Lang Leo',
        diachi: 'Phường 3, Quận 5, TP.HCM',
        ava: 'https://i-vnexpress.vnecdn.net/2019/07/30/anh-thien-nhien-dep-thang-7-1564483719_680x0.jpg',
        status: 'Loẻm ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, leo purus nequ Loẻm ipsum dolor sit amet, cotetu...'
    },
    {
        key: 4,
        title: 'Nguyễn Văn B',
        chiase: 'Chia sẻ bởi Lê Lang Leo',
        diachi: 'Phường 3, Quận 5, TP.HCM',
        ava: 'https://i-vnexpress.vnecdn.net/2019/07/30/anh-thien-nhien-dep-thang-7-1564483719_680x0.jpg',
        status: 'Loẻm ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, leo purus nequ Loẻm ipsum dolor sit amet, cotetu...'
    },
    {
        key: 5,
        title: 'Nguyễn Văn B',
        chiase: 'Chia sẻ bởi Lê Lang Leo',
        diachi: 'Phường 3, Quận 5, TP.HCM',
        ava: 'https://i-vnexpress.vnecdn.net/2019/07/30/anh-thien-nhien-dep-thang-7-1564483719_680x0.jpg',
        status: 'Loẻm ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, leo purus nequ Loẻm ipsum dolor sit amet, cotetu...'
    },
    {
        key: 6,
        title: 'Nguyễn Văn B',
        chiase: 'Chia sẻ bởi Lê Lang Leo',
        diachi: 'Phường 3, Quận 5, TP.HCM',
        ava: 'https://i-vnexpress.vnecdn.net/2019/07/30/anh-thien-nhien-dep-thang-7-1564483719_680x0.jpg',
        status: 'Loẻm ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, leo purus nequ Loẻm ipsum dolor sit amet, cotetu...'
    },
    {
        key: 7,
        title: 'Nguyễn Văn B',
        chiase: 'Chia sẻ bởi Lê Lang Leo',
        diachi: 'Phường 3, Quận 5, TP.HCM',
        ava: 'https://i-vnexpress.vnecdn.net/2019/07/30/anh-thien-nhien-dep-thang-7-1564483719_680x0.jpg',
        status: 'Loẻm ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, leo purus nequ Loẻm ipsum dolor sit amet, cotetu...'
    },
    {
        key: 8,
        title: 'Nguyễn Văn B',
        chiase: 'Chia sẻ bởi Lê Lang Leo',
        diachi: 'Phường 3, Quận 5, TP.HCM',
        ava: 'https://i-vnexpress.vnecdn.net/2019/07/30/anh-thien-nhien-dep-thang-7-1564483719_680x0.jpg',
        status: 'Loẻm ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, leo purus nequ Loẻm ipsum dolor sit amet, cotetu...'
    },
]


class DanhSachLeadTimNang extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textSearch: "",
            textRender: 'Đã huỷ',
            dataRender: 'Đã huỷ'
        }
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={{ marginTop: 10, marginBottom: 10, borderRadius: 10, backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 15 }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Image source={{ uri: item.ava }} style={{ height: 60, width: 60, borderRadius: 100 }}></Image>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                        <Text style={{ fontWeight: '400' }}>{item.chiase}</Text>
                        <Text style={{ fontWeight: '200', fontStyle: 'italic' }}>{item.diachi}</Text>
                    </View>
                </View>
                <View style={{ borderTopColor: '#E8E8E8', borderTopWidth: 1, flexDirection: 'row', }}>
                    <View style={{ marginTop: 10, flexDirection: 'row', flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Status:</Text>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text>{item.status}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const { textSearch, textRender } = this.state

        return (
            <View style={styles.constainer}>
                {/* Header */}
                <Header navigation={this.props.navigation} ></Header>
                {/* Body */}
                <View style={styles.ViewFlat}>
                    <FlatList
                        data={DataLeads}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ marginTop: 10 }}
                        contentContainerStyle={{}}
                    />
                </View>

            </View>

        )
    }
}



const Header = ({ navigation }) => {
    const _goBack = (navigation) => {
        navigation.goBack()
    }
    return (
        <View style={styles.viewHeader}>
            <LinearGradient colors={['#0016f1', '#ccb5e0',]} style={styles.linearGradient}>
                <View style={styles.khungGoback}>
                    <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 10, }}
                        onPress={() => _goBack(navigation)}
                    >
                        <Image source={require('../images/icon/left-arrow.png')}
                            style={styles.image}></Image>
                    </TouchableOpacity>

                    <View style={styles.khungGoback1Data}>
                        <Text style={styles.danhsachbooking}>  Danh Sách Leads Tìm Năng </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        marginBottom: getBottomSpace(),
    },
    linearGradient: {
        marginTop: 5,
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 22,
        justifyContent: 'center'
    },
    viewHeader: {
        width: '100%',
        height: '8%',
    },
    danhsachbooking: {
        color: 'white',
        fontSize: 18
    },
    khungGoback: {
        justifyContent: 'center', flexDirection: 'row', alignItems: 'center'
    },
    image: {
        height: 20, width: 20, tintColor: 'white',
    },
    khungGoback1Data: {
        justifyContent: 'center', alignItems: 'center', flex: 1, marginLeft: -20
    },
    ViewFlat: {
        flex: 1
    }

})

export default DanhSachLeadTimNang