import React, {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  SectionList,
} from 'react-native';

import styles from './style';

const ShoppingScreen = () => {
  const DATA = [
    {
      header: {
        title: 'Main dishes',
        count: 3,
      },
      data: [
        {
          name: 'Pizza',
        },
        {
          name: 'Burger',
        },
        {
          name: 'Risotto',
        },
      ],
    },
  ];

  const onPressSeeAllButton = () => {
    console.log('you just pressed See All button');
  };

  const renderPortletSection = section => {
    console.log(`Alan - section: ${JSON.stringify(section)}`);

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{section.title || 'Products'}</Text>
        <Text style={styles.sectionNumber}>{section.count}</Text>
        <View style={styles.sectionSpace} />
        <Pressable onPress={onPressSeeAllButton} style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Hi-Fi Shop & Service</Text>
      <Text style={styles.description}>
        Audio shop on Rustaveli Ave 57. This shop offers both products and
        services
      </Text>

      <View style={styles.portlet}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={item => <Text>content</Text>}
          renderSectionHeader={({section: {header}}) =>
            renderPortletSection(header)
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ShoppingScreen;
