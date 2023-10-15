import React from 'react';
import { View, FlatList } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItem } from '../data/menuItems';
import { styles } from '../Theme/appTheme';



export const HomeScreen = () => {

    return (
        <View style={{flex: 1, ...styles.globalMargin}}>

            <FlatList 
                data={menuItem}
                renderItem={ ({item}) => <FlatListMenuItem menuItem={item} /> }
                keyExtractor={(item)=> item.name }
                ListHeaderComponent={ <HeaderTitle title='Opciones de Menú' /> }
                ItemSeparatorComponent={ () => <ItemSeparator /> }
            />
        </View>
    )
}