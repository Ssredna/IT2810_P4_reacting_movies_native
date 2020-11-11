import gql from 'graphql-tag';
import {columnDefs} from '../components/DataScreen/MovieList/Columns';

export const buildMovieQuery = () => {
  const fields: string[] = [];
  columnDefs.map(columnDef => fields.push(columnDef.field));

  const fieldString = fields.join('\n');

  const query = gql`
    query($searchString: String, $page: Int, $filter: Filter, $sort: Sort) {
      Movie(
        searchString: $searchString
        page: $page
        filter: $filter
        sort: $sort
      ) {
        movies {
          ${fieldString}
        }
        totalRowCount 
      }
    }
  `;

  return query;
};

export const DETAIL_MOVIE_QUERY = gql`
  query($searchString: String) {
    Movie(searchString: $searchString) {
      movies {
        tagline
        overview
        genres {
          name
        }
      }
    }
  }
`;

export const MOVIE_REVIEW_QUERY = gql`
  query($movieId: String) {
    Reviews(movie_id: $movieId) {
      movie_id
      author
      text
    }
  }
`;
