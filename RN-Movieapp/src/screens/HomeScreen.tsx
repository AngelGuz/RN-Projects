import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, useWindowDimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ImageColors from 'react-native-image-colors'

import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

export const HomeScreen = () => {

    const instets = useSafeAreaInsets();
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

    const { setMainColors } = useContext(GradientContext);

    const getPosterColors = async(index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

        setMainColors({primary, secondary});
    }

    useEffect(() => {
        if(nowPlaying.length > 0){
            getPosterColors(0);
        }
    }, [nowPlaying])
    

    const dimension = useWindowDimensions();

    if(isLoading){
        return (
            <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color="red" size={ 100 } />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{marginTop: instets.top + 20}}>
                    {/* Carousel Principal */}
                    <View style={{height:450}}>
                        <Carousel
                            data={ nowPlaying }
                            renderItem={ ( { item }: any ) => <MoviePoster movie={ item }/> }
                            sliderWidth={ dimension.width }
                            itemWidth={ 300 }
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ index => getPosterColors(index)  }
                        />
                    </View>
                    {/* Peliculas Populares */}
                    <HorizontalSlider title='Populares' movies={ popular } />
                    <HorizontalSlider title='Top Rated' movies={ topRated } />
                    <HorizontalSlider title='Upcoming' movies={ upcoming } />
                    
                </View>
            </ScrollView>
        </GradientBackground>
    )
}