import React, { useContext } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

export const PullToRefreshScreen = () => {

    const {theme:{colors, dividerColor, dark}} = useContext(ThemeContext);

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData("hola mundo");
        }, 1500);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={200} // Android: Bajar el loading
                    progressBackgroundColor={dividerColor}
                    colors={[colors.text]}
                    //style={{backgroundColor: '#5856D6'}}
                    tintColor={dark?'white':'black'}
                />
            }
        >
            <View>
                <HeaderTitle title='Pull to refresh' />

                {
                   data && <HeaderTitle title={data} />
                }

            </View>
        </ScrollView>
    )
}