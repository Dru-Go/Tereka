// Start Over and Rethink
import React, {useState, useReducer} from 'react';
import './seggest.style.css';
import SuggestionReducer from '../../Reducer/suggestionReducer';
import CategoryDropDown from './categoryDropdown';
import Tips from './tips';

const Categories = ['Fiction', 'Buisness', 'History', 'Business', 'Others'];

const status = {
  pending: 'Processing',
  confirmation: 'Confirmed',
  open: 'Open',
};

const INITIAL_STATE = [
  {
    title: '',
    author: '',
    likes: 0,
    category: '',
    discription: '',
    status: status.pending,
  },
];

const Suggest = () => {
  const [state, dispatch] = useReducer(SuggestionReducer, INITIAL_STATE);
  const [values, setValue] = useState(INITIAL_STATE);
  const [toggle, setToggle] = useState(false);

  const toggled = e => {
    setToggle(!toggle);
  };

  const handleChange = e => {
    setValue({
      ...values,
      [e.target.name]: [e.target.value],
    });
    if (e.target.name === 'title') {
      dispatch({type: 'SEARCH_TITLE', value: e.target.value});
    }
    if (e.target.name === 'author') {
      dispatch({type: 'SEARCH_AUTHOR', value: e.target.value});
    }
  };

  return (
    <div class="flex h-full">
      <div class="w-3/4 mt-5 ">
        <div class="text-lg font-medium text-gray-800 text-center">
          New Suggestion
        </div>
        <div class="px-16 py-8">
          <div class="flex items-start py-5">
            <div class="font-medium ">Title</div>
            <div class="border-b-2 px-2 ml-10 w-64  text-gray-800">
              <input
                class="w-full  bg-transparent text-sm outline-none"
                placeholder="Enter Title (Required)"
                name="title"
                autoComplete={'off'}
                type="text"
                value={values.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex items-start py-5">
            <div class="font-medium ">Author</div>
            <div class="border-b-2 px-2 ml-8 w-64 text-sm text-gray-800">
              <input
                class="w-full bg-transparent text-sm outline-none"
                placeholder="Enter Auther's Name (Required)"
                name="author"
                autoComplete={'off'}
                type="text"
                value={values.author}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex items-start py-5">
            <div class="font-medium ">Category</div>
            <div class="border-b-2 px-2 ml-6 w-64 text-sm text-gray-800">
              <input
                class="w-full bg-transparent text-sm outline-none"
                placeholder="Enter Category (Required)"
                name="category"
                autoComplete={'off'}
                type="text"
                onFocus={toggled}
                value={values.category}
                onChange={toggled}
              />
            </div>
          </div>
          <CategoryDropDown
            active={toggle}
            categories={Categories}
            values={values}
            setValues={setValue}
            setToggle={setToggle}
          />
          <div class="flex items-start py-5">
            <div class="font-medium ">Discription</div>
            <div class="border bg-darkPurple rounded-lg ml-4 text-sm text-gray-800 p-2">
              <textarea
                class=" bg-transparent text-sm outline-none "
                name="discription"
                placeholder="Enter some dipcription (Optional)"
                autoComplete={'off'}
                cols="40"
                rows="7"
                value={values.discription}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div class="text-gray-600 cursor-pointer hover:bg-darkPurple rounded w-32 float-right text-sm p-2 bg-darkPurple">
            Save & Subscribe
          </div>
        </div>
      </div>
      <Tips state={state} value={values} setValues={setValue} />
    </div>
  );
};

export default Suggest;
