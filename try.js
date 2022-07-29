const arr = [
    {id: 1, name: 'Tom', test: 'abc'},
    {id: 2, name: 'Bob', test: 'xyz'},
  ];
  
  const newArr = arr.map(({id, ...rest}) => {
    return rest;
  });
  
  // 👇️ [{id: 1, name: 'Tom'},  {id: 2, name: 'Bob'}]
  console.log(newArr);
  