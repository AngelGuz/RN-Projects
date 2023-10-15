import React from 'react';
import { View, Text, FlatList } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interface/creditsInterface';
import { MovieFull } from '../interface/movieInterface';
import { CastItem } from './CastItem';

interface Props {
    moviefull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ moviefull, cast }:Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name="star-outline" color="gray" size={16} />
                    <Text> { moviefull.vote_average }</Text>
                    <Text style={{marginLeft: 5}}>
                        - { moviefull.genres.map(g => g.name).join(', ') }
                    </Text>
                </View>
                {/* Historia */}
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                    Historia
                </Text>

                <Text style={{fontSize: 16, marginTop: 5}}>
                    {moviefull.overview}
                </Text>

                {/* Presupuesto */}
                <View style={{flexDirection:'row', marginTop:10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        Presupuesto: 
                    </Text>
                    <Text style={{fontSize: 18, marginLeft: 5}}>
                        { currencyFormatter.format(moviefull.budget, {code:'USD'}) }
                    </Text>
                </View>
            </View>
            {/* Casting */}
            <View style={{marginTop: 10, marginBottom: 100}}>
                {/* Actores */}
                <Text style={{fontSize: 23, marginTop: 10, marginHorizontal:20, fontWeight: 'bold'}}>
                    Actores
                </Text>

                <FlatList 
                    data={cast}
                    keyExtractor={ (item) => item.id.toString() }
                    renderItem={ ({item}) => <CastItem actor={item} /> }
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: 10, height: 70}}
                />

            </View>


        </>
    )
}