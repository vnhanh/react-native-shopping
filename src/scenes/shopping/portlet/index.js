import React from 'react';
import {View, Text, Pressable, Image, FlatList} from 'react-native';

import style from './style';

const Portlet = props => {
  const {onPressSeeAllButton} = props;

  const renderHeader = section => {
    // console.log(`Alan - section: ${JSON.stringify(section)}`);

    return (
      <View style={style.section}>
        <Text style={style.title}>{section.header.title || 'Products'}</Text>
        <Text style={style.number}>{section.content.length || 0}</Text>
        <View style={style.space} />
        <Pressable onPress={onPressSeeAllButton} style={style.seeAllButton}>
          <Text style={style.seeAllText}>See all</Text>
        </Pressable>
      </View>
    );
  };

  const renderItem = data => {
    const {item} = data;

    return (
      <View key={item.name}>
        <View style={style.frame}>
          <Image source={{uri: item.imgUrl}} style={style.image} />
        </View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={style.root}>
      {renderHeader(DATA)}
      <FlatList
        data={DATA.content}
        renderItem={item => renderItem(item)} // item = {item: initialItem, index, separator}
        keyExtractor={item => item.name} // each item of data
        horizontal
        showsHorizontalScrollIndicator={false}
        style={style.list}
      />
    </View>
  );
};

export default Portlet;

const DATA = {
  header: {
    title: 'Products',
  },
  // source page: https://tainghe.com.vn/tai-nghe.html
  content: [
    {
      name: 'Tai nghe True Wireless Sony WF-C500',
      discount: 10,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_4174_tai_nghe_true_wireless_sony_wf_c500_chinh_hang_gia_re_3.jpg',
    },
    {
      name: 'Tai nghe Campfire Ara',
      discount: 12,
      imgUrl: 'https://tainghe.com.vn/media/product/250_2984_ara_1_ws.jpg',
    },
    {
      name: 'Tai nghe Campfire Andromeda 2020',
      discount: 16,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_2982_andromeda_2020_01_webpage_image_1400x1400.jpg',
    },
    {
      name: 'Tai nghe không dây Apple Airpods Pro 2 (2022)',
      discount: 15,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_3529_tai_nghe_apple_airpod_pro_2_xuan_vu_4.jpg',
    },
    {
      name: 'Tai nghe Sennheiser Momentum True Wireless 3',
      discount: 5,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_3660_tai_nghe_sennheiser_momentum_true_wireless_3_xuan_vu_chinh_hang.jpg',
    },
    {
      name: '64 Audio A12t',
      discount: 6,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_1828-1964ears-1528325169-a12t_landing_page_lros.jpg',
    },
    {
      name: 'Tai nghe Blon BL03 có Mic',
      discount: 7,
      imgUrl: 'https://tainghe.com.vn/media/product/250_2679_1.JPG',
    },
    {
      name: '64 Audio A4t Custom IEM',
      discount: 9,
      imgUrl:
        'https://tainghe.com.vn/media/product/250_1837-1964ears-1528351296-a4t.jpg',
    },
  ],
};
