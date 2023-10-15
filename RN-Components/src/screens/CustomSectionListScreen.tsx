import React, { useContext } from 'react';
import { View, Text, SectionList } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../Theme/appTheme';
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin"]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thos", "Spiderman", "Antman"]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama"]
    },
];


export const CustomSectionListScreen = () => {

    const {theme: {colors}} = useContext(ThemeContext);

    return (
        <View style={{...styles.globalMargin, flex: 1}}>

            <SectionList 
                sections={ casas }
                keyExtractor={ (item, index) => item + index }

                ListHeaderComponent={ () => <HeaderTitle title='Secction List' /> }
                ListFooterComponent={ () => (
                    <View style={{marginBottom: 70}}>
                        <HeaderTitle title={'Total de casas'+ casas.length} />
                    </View>
                ) }

                renderItem={ ({item}) => <Text style={{color:colors.text}}>{item}</Text> }
                stickySectionHeadersEnabled

                renderSectionHeader={ ({section}) => (
                    <View style={{backgroundColor:colors.background}}>
                        <HeaderTitle title={section.casa} />
                    </View>
                ) }
                renderSectionFooter={ ({section}) => (
                    <Text style={{color: colors.text}}>{'total: ' + section.data.length}</Text>
                ) }
                
                SectionSeparatorComponent={ () => <ItemSeparator />}
                // ItemSeparatorComponent={ () => <ItemSeparator/> }

                showsVerticalScrollIndicator={false}
            />
            
        </View>
    )
}