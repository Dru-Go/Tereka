import React from 'react'

const styles = {
	active:
	  'absolute font-normal bg-gray-200 shadow overflow-hidden rounded w-48 border mt-2 py-1 z-20',
	hidden: 'hidden',
  };
  


const CategoryDropDown = ({
	active,
	categories,
	values,
	setValues,
	setToggle,
  }) => {
	console.log('Categories ', categories);
	console.log('Values ', values);
	return (
	  <ul className={active ? styles.active : styles.hidden}>
		{categories.map(link => (
		  <List
			title={link}
			setActive={setToggle}
			setValues={setValues}
			values={values}
		  />
		))}
	  </ul>
	);
  };
  
  const List = ({setActive, title, values, setValues}) => {
	console.log('Titles in list', title);
	const handleClick = () => {
	  const form = values
	  setActive(false);
	  console.log('Forms Before', form)
	  form.category = title;
	  console.log('Final Form', form)
	  setValues(form);
	};
  
	return (
	  <li class="hover:bg-gray-500" onClick={handleClick}>
		<div class="p-2 border-b">
		  <div class="ml-2  text-gray-700">{title} </div>
		</div>
	  </li>
	);
  };
  
export default CategoryDropDown  