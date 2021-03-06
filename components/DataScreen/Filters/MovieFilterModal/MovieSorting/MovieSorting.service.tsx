import { SortDirection } from '../../../../../redux/models/movieReducer.model';
import { MovieItemFields } from '../../../MovieList/models/movieItem.model';

export const sortByFields: string[] = MovieItemFields.filter(
  item => !item.hide
).map(item => item.field);

// Returns correct icon name base on sort direction
export const mapSortDirectionToIconName = (
  sortDirection: SortDirection
): string => {
  switch (sortDirection) {
    case 'asc':
      return 'arrow-upward';
    case 'desc':
      return 'arrow-downward';
    default:
      return '';
  }
};

// Returns field value that should be display on the button
export const mapFieldNameToDisplayValue = (field: string): string => {
  switch (field) {
    case sortByFields[0]:
      return 'Title';
    case sortByFields[1]:
      return 'Year';
    case sortByFields[2]:
      return 'Rating';
    default:
      return '';
  }
};
