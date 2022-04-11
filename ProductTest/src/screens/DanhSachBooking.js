import React, { Component } from 'react'
import {
    ScrollView, StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, StatusBar, Image, TextInput,
    TouchableOpacity, ImageBackground
} from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import LinearGradient from 'react-native-linear-gradient';
const heightWindow = Dimensions.get('window').height - getStatusBarHeight()
const widthWindow = Dimensions.get('window').width

const Data = [
    {
        title: 'Giữ chổ',
        key: 0,
    },
    {
        title: 'Đặt cọc',
        key: 1,
    },
    {
        title: 'Thành công',
        key: 2,
    },
    {
        title: 'Đã huỷ',
        key: 3
    }
]

const DataDaHuy = [
    {
        title: 'METRO START .T01-A11-08',
        gido: 1200,
        bed: 4,
        something: 2,
        sea: 'Sea',
        something1: 'A - F - 02',
        khachhang: 'NGUYỄN VĂN TIẾN',
        mahopdong: 'MGH0021',
        ngaydat: '13/12/2021 - 15:12',
        sotien: '10.000.000 VNĐ',
        trangthai: 'Đã Huỷ'
    },
    {
        title: 'METRO START .T01-A11-08',
        gido: 1200,
        bed: 4,
        something: 2,
        sea: 'Sea',
        something1: 'A - F - 02',
        khachhang: 'NGUYỄN VĂN TIẾN',
        mahopdong: 'MGH0021',
        ngaydat: '13/12/2021 - 15:12',
        sotien: '10.000.000 VNĐ',
        trangthai: 'Đã Huỷ'
    },
    {
        title: 'METRO START .T01-A11-08',
        gido: 1200,
        bed: 4,
        something: 2,
        sea: 'Sea',
        something1: 'A - F - 02',
        khachhang: 'NGUYỄN VĂN TIẾN',
        mahopdong: 'MGH0021',
        ngaydat: '13/12/2021 - 15:12',
        sotien: '10.000.000 VNĐ',
        trangthai: 'Đã Huỷ'
    },
    {
        title: 'METRO START .T01-A11-08',
        gido: 1200,
        bed: 4,
        something: 2,
        sea: 'Sea',
        something1: 'A - F - 02',
        khachhang: 'NGUYỄN VĂN TIẾN',
        mahopdong: 'MGH0021',
        ngaydat: '13/12/2021 - 15:12',
        sotien: '10.000.000 VNĐ',
        trangthai: 'Đã Huỷ'
    },
]

const DataThanhCong = [
    {
        title: 'METRO START .T01-A11-08',
        gido: 1200,
        bed: 4,
        something: 2,
        sea: 'Sea',
        something1: 'A - F - 02',
        khachhang: 'NGUYỄN VĂN TIẾN',
        mahopdong: 'MGH0021',
        ngaydat: '13/12/2021 - 15:12',
        sotien: '10.000.000 VNĐ',
        trangthai: 'Thành công'
    },
    {
        title: 'METRO START .T01-A11-08',
        gido: 1200,
        bed: 4,
        something: 2,
        sea: 'Sea',
        something1: 'A - F - 02',
        khachhang: 'NGUYỄN VĂN TIẾN',
        mahopdong: 'MGH0021',
        ngaydat: '13/12/2021 - 15:12',
        sotien: '10.000.000 VNĐ',
        trangthai: 'Thành công'
    },
    {
        title: 'METRO START .T01-A11-08',
        gido: 1200,
        bed: 4,
        something: 2,
        sea: 'Sea',
        something1: 'A - F - 02',
        khachhang: 'NGUYỄN VĂN TIẾN',
        mahopdong: 'MGH0021',
        ngaydat: '13/12/2021 - 15:12',
        sotien: '10.000.000 VNĐ',
        trangthai: 'Thành công'
    },
    {
        title: 'METRO START .T01-A11-08',
        gido: 1200,
        bed: 4,
        something: 2,
        sea: 'Sea',
        something1: 'A - F - 02',
        khachhang: 'NGUYỄN VĂN TIẾN',
        mahopdong: 'MGH0021',
        ngaydat: '13/12/2021 - 15:12',
        sotien: '10.000.000 VNĐ',
        trangthai: 'Thành công'
    },
]


class DanhSachBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textSearch: "",
            textRender: 'Đã huỷ',
            dataRender: 'Đã huỷ'
        }
        this.onChangeText = this.onChangeText.bind(this)
        this.onChangeData = this.onChangeData.bind(this)

    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={{ marginTop: 10, marginBottom: 10, borderRadius: 20, backgroundColor: '#FFFFFF', }}>
                <View style={{}}>
                    <ImageBackground source={{ uri: 'https://noithattrevietnam.com/uploaded/2019/11/1-trang-tri-phong-ngu-bang-anh.jpg' }}
                        resizeMode="stretch" style={{ height: 0.2 * heightWindow, width: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '75%' }}>
                            </View>
                            <View style={{ alignItems: 'center', backgroundColor: item.trangthai == 'Thành công' ? 'green' : 'black', width: '25%', paddingVertical: 5, borderBottomLeftRadius: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>{item.trangthai}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.8, }}></View>
                        <View style={{ paddingHorizontal: 10, }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../images/icon/map.png')}></Image>
                                    <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 5 }}>{item.gido}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../images/icon/giuong.png')}></Image>
                                    <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 5 }}>{item.bed}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../images/icon/khongbiet.png')}></Image>
                                    <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 5 }}>{item.something}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../images/icon/conmat.png')}></Image>
                                    <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 5 }}>{item.sea}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../images/icon/contau.png')}></Image>
                                    <Text style={{ color: 'white', fontWeight: 'bold', paddingHorizontal: 5 }}>{item.something1}</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{}}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                            <Text style={{ color: '#ADADAD' }}>Khách hàng: </Text>
                            <Text style={{ fontWeight: 'bold' }}> {item.khachhang}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#ADADAD' }}>Mã hợp đồng: </Text>
                            <Text style={{ fontWeight: 'bold' }}> {item.mahopdong}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                            <Text style={{ color: '#ADADAD' }}>Ngày đặt: </Text>
                            <Text style={{ fontWeight: 'bold' }}> {item.ngaydat}</Text>
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, paddingHorizontal: 15, borderColor: '#F4F4F4' }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                            <Text style={{ color: '#ADADAD' }}>Số tiền đã đóng: </Text>
                            <Text style={{ fontWeight: 'bold' }}> {item.sotien}</Text>
                        </View>

                    </View>
                </View>

            </View>
        )
    }

    chooseData = () => {

    }

    onChangeText = (text) => {
        this.setState({
            textSearch: text
        })
    }

    onChangeData = (item) => {
        this.setState({
            textRender: item
        })
    }
    render() {
        const { textSearch, textRender } = this.state
        return (
            <View style={styles.constainer}>
                {/* Header */}
                <Header textSearch={textSearch} onChange={this.onChangeText} textRender={textRender} changeData={this.onChangeData} ></Header>
                {/* State change view */}
                <View style={styles.containerStateChang}>
                    {
                        textRender == 'Đã huỷ' ?
                            <FlatList
                                data={DataDaHuy}
                                renderItem={this._renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                style={{ marginHorizontal: 10, marginTop: 10 }}
                                contentContainerStyle={{}}
                            /> : null
                    }
                    {
                        textRender == 'Thành công' ?
                            <FlatList
                                data={DataThanhCong}
                                renderItem={this._renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                style={{ marginHorizontal: 10, marginTop: 10 }}
                                contentContainerStyle={{}}
                            /> : null
                    }

                </View>
                {/* Bottom */}
                <Bottom navigation={this.props.navigation}></Bottom>
            </View>

        )
    }

}

const Header = ({ textSearch, onChange, changeData, textRender }) => {
    return (
        <View style={styles.viewHeader}>
            <LinearGradient colors={['#0016f1', '#ccb5e0',]} style={styles.linearGradient}>
                <View style={styles.khungGoback}>
                    <View style={styles.khungGoback1}>
                        <Image source={require('../images/icon/left-arrow.png')}
                            style={styles.image}></Image>
                        <View style={styles.khungGoback1Data}>
                            <Text style={styles.danhsachbooking}>  Danh Sách Booking </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.khungSearch}>
                    <View style={styles.search}>
                        <Image source={require('../images/icon/Search.png')} style={{ height: 20, width: 20 }} />
                        <TextInput
                            value={textSearch}
                            numberOfLines={1}
                            style={styles.textInput}
                            placeholder={'Tìm kiếm'}
                            placeholderTextColor="#FFFFFF"
                            onChangeText={text => {
                                onChange(text)
                            }} />
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#F2E8E8', borderColor: 'white', borderWidth: 2, padding: 10, borderRadius: 10, }}>
                        <Image source={require('../images/icon/Boloc.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ color: 'white' }}>Lọc</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={styles.khungState}>
                <Item textRender={textRender} title='Giũ chổ' onpress={changeData} ></Item>
                <Item textRender={textRender} title='Đặt cọc' onpress={changeData}   ></Item>
                <Item textRender={textRender} title='Thành công' onpress={changeData}  ></Item>
                <Item textRender={textRender} title='Đã huỷ' onpress={changeData}  ></Item>
            </View>
        </View>
    )
}

const Item = ({ title, onpress, textRender }) => {
    return (
        <TouchableOpacity onPress={() => onpress(title)} style={{ width: '25%', justifyContent: 'center', alignItems: 'center', borderBottomColor: textRender == title ? 'blue' : null, borderBottomWidth: textRender == title ? 2 : 0 }}>
            <Text style={{ fontWeight: '500', color: textRender == title ? 'blue' : null }}>{title}</Text>
        </TouchableOpacity >
    )
}

const Bottom = ({ navigation }) => {
    return (
        <View style={styles.khungBottom}>
            <TouchableOpacity style={styles.touchHome}>
                <Image source={require('../images/icon/home.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchBooking}>
                <View style={styles.viewtouchBooking}>
                    <LinearGradient colors={['#0016f1', '#ccb5e0',]} style={styles.linearGradientButton}>
                        <Image source={require('../images/icon/qr.png')} style={{ width: 20, height: 20 }}></Image>
                    </LinearGradient>
                    <Text style={{ color: '#0016f1' }}>Booking</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity style={styles.touchHome}
                onPress={() => navigation.navigate('DanhSachLeadTimNang')}>
                <Image source={require('../images/icon/ava.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        marginBottom: getBottomSpace()
    },
    linearGradient: {
        marginTop: 5,
        width: '100%',
        height: '70%',
        borderBottomLeftRadius: 22
    },
    viewHeader: {
        width: '100%',
        height: '25%',
    },
    danhsachbooking: {
        color: 'white',
        fontSize: 18
    },
    khungGoback: {
        height: '38%', borderBottomWidth: 0.3, borderColor: 'white', justifyContent: 'center'
    },
    khungGoback1: {
        flexDirection: 'row', paddingHorizontal: 10
    },
    image: {
        height: 20, width: 20, tintColor: 'white',
    },
    khungGoback1Data: {
        justifyContent: 'center', alignItems: 'center', flex: 1, marginLeft: -20
    },
    search: {
        flexDirection: 'row', paddingHorizontal: 10, borderRadius: 10, alignItems: 'center',
        backgroundColor: '#F2E8E8', borderColor: 'white', marginRight: 12
    },
    textInput: {
        paddingVertical: Platform.OS == 'ios' ? 10 : 5, paddingHorizontal: 5, fontSize: 16, width: '70%'
    },
    khungSearch: {
        justifyContent: 'center', alignItems: 'center', height: '60%',
        flexDirection: 'row', paddingHorizontal: 10
    },
    khungState: {
        borderBottomWidth: 1, borderColor: '#EAEAEA', height: '28%', width: '100%', flexDirection: 'row', backgroundColor: '#F6F6F6'
    },
    containerStateChang: {
        backgroundColor: '#E5E5E5', flex: 1,
    },
    linearGradientButton: {
        marginTop: 5, width: '60%', height: '90%', borderRadius: 100, justifyContent: 'center', alignItems: 'center',
    },
    touchHome: {
        width: '35%', justifyContent: 'center', alignItems: 'center', paddingVertical: 10
    },
    touchBooking: {
        paddingHorizontal: 10, width: '25%'
    },
    viewtouchBooking: {
        alignItems: 'center', marginBottom: 50, position: 'relative'
    },
    khungBottom: {
        backgroundColor: '#F6F6F6', flex: 0.15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'
    }
})

export default DanhSachBooking