// Start Over and Rethink
import React from 'react';
import './suggest.style.css';
import CategoryDropDown from './categoryDropdown';
import Tips from './tips';
import {withRouter} from 'react-router-dom';
import useSuggest from '../../Hooks/useSuggest';

const style = {
  Subscribe:
    'text-gray-600 cursor-pointer hover:bg-darkPurple rounded w-32 float-right text-sm p-2 bg-darkPurple',
  inpDiv: 'border-b-2 px-2 ml-10 w-64  text-gray-800',
  input: 'w-full bg-transparent text-sm outline-none',
  textareaDiv: 'border bg-darkPurple rounded-lg ml-4 text-sm text-gray-800 p-2',
  textarea: 'bg-transparent text-sm outline-none',
};

const Suggest = ({history}) => {
  const {
    values,
    setValue,
    toggle,
    setToggle,
    loading,
    data,
    toggled,
    handleChange,
    handleClick,
  } = useSuggest(history);

  return (
    <div class="flex h-full">
      <div class="w-3/4 mt-5 ">
        <div class="text-lg font-medium text-gray-800 text-center">
          New Suggestion
        </div>
        <div class="px-16 py-8">
          <div class="flex items-start py-5">
            <div class="font-medium ">Title</div>
            <div className={style.inpDiv}>
              <input
                className={style.input}
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
            <div className={style.inpDiv}>
              <input
                className={style.input}
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
            <div className={style.inpDiv}>
              <input
                className={style.input}
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
          {toggle ? (
            <CategoryDropDown
              active={toggle}
              values={values}
              setValues={setValue}
              setToggle={setToggle}
            />
          ) : null}
          <div class="flex items-start py-5">
            <div class="font-medium ">Discription</div>
            <div className={style.textareaDiv}>
              <textarea
                className={style.textarea}
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
          <div className={style.Subscribe} onClick={handleClick}>
            Save & Subscribe
          </div>
        </div>
      </div>
      {data ? (
        <Tips
          state={data.search_Suggestion}
          loading={loading}
          value={values}
          setValues={setValue}
        />
      ) : null}
    </div>
  );
};

export default withRouter(Suggest);
