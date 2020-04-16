import {useEffect, useReducer} from 'react';
import SortReducer from '../Reducer/sortReducer';
import {useQuery} from '@apollo/react-hooks';
import {ALL_AUDIO_ITEMS} from '../Graphql/query';
import FilterReducer from '../Reducer/filterReducer';

export default function useItem(sortBy, filter) {
  const {loading, error, data} = useQuery(ALL_AUDIO_ITEMS);
  const [, sort_Dispatcher] = useReducer(SortReducer, null);
  const [filteredState, dispatcher] = useReducer(FilterReducer, data);
  var state = filteredState ? filteredState : data ? data.all_Audios : null;
  let audios = [];

  useEffect(() => {
    sort_Dispatcher({type: sortBy.toUpperCase(), value: state});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  useEffect(() => {
    if (!loading) {
      dispatcher({type: filter.toUpperCase(), value: data.all_Audios});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return {
    loading,
    error,
    audios,
    state,
  };
}
