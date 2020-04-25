import React, {useState} from 'react';
import Sad from '../Components/error/sad';

import {useLazyQuery, useMutation} from '@apollo/react-hooks';

import {SUGGESTIONS, SEARCH_SUGGESTIONS} from '../Graphql/query';
import {NEW_SUGGESTION} from '../Graphql/mutations';

const status = {
  pending: 'PENDING',
  confirmation: 'CONFIRMED',
  open: 'AVAILABLE',
};
const INITIAL_STATE = {
  title: '',
  author: '',
  likes: 0,
  category: '',
  discription: '',
  status: status.pending,
};

const useSuggest = history => {
  const [values, setValue] = useState(INITIAL_STATE);
  const [toggle, setToggle] = useState(false);

  const [AllSuggestions, {loading, error, data}] = useLazyQuery(
    SEARCH_SUGGESTIONS
  );


  const [AddSuggestion] = useMutation(NEW_SUGGESTION, {
    update(cache, {data: {suggestions}}) {
      const data = cache.readQuery({
        query: SUGGESTIONS,
      });

      console.log('Cached Query is ', data.suggestions);

      cache.writeQuery({
        query: SUGGESTIONS,
        data: {suggestions: [suggestions, ...data.suggestions]},
      });
    },
  });

  

  const handleClick = () => {
    console.log(values);
    AddSuggestion({
      variables: {
        title: values.title,
        author: values.author,
        category: values.category,
        discription: values.discription,
      },
    });
    setValue(INITIAL_STATE);
    history.push('/suggestions');
  };

  if (error) {
    console.log('Error in the Suggestion ', error);
    return <Sad />;
  }

  const toggled = e => {
    setToggle(!toggle);
  };

  const handleChange = e => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'title') {
      AllSuggestions({variables: {title: e.target.value}});
    }
  };

  return {
    values,
    setValue,
    toggle,
    setToggle,
    loading,
    data,
    toggled,
    handleChange,
    handleClick,
  };
};

export default useSuggest;
