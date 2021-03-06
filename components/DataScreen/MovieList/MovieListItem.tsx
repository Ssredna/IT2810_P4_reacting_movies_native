import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import { IMovieListObject } from '../../../GraphQL/models/movie.model';
import { getFullYearNumber } from '../../../utils/dates';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

interface IMovieListItemProps {
  row: IMovieListObject;
}

const MovieListItem = (props: IMovieListItemProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      // Go to detailpage of movieListItem when pressed
      // passes movie properties as movieDetails
      onPress={() => navigation.navigate('Detail', { movieDetails: props.row })}
    >
      <View style={styles.movieInfoContainer}>
        <Text style={styles.title}>
          {props.row.title}

          {/* Don't assume every movie have release_date in our db,
        therefore we renders conditionally */}
          {props.row.release_date !== undefined && (
            <Text style={styles.release_date}>
              {' '}
              ({getFullYearNumber(props.row.release_date)})
            </Text>
          )}
        </Text>
        {props.row.vote_average !== undefined && (
          <Text style={{ marginTop: 3 }}>
            User rating: {props.row.vote_average}
          </Text>
        )}
      </View>
      <View style={styles.iconContainer}>
        <Icon name="keyboard-arrow-right" size={30} />
      </View>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  release_date: {
    fontWeight: 'normal',
  },
  movieInfoContainer: {
    flex: 1,
  },
  iconContainer: {
    width: 40,
  },
});

export default MovieListItem;
