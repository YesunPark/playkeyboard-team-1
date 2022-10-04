import { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryTheme = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const data = await axios.get('https://api.plkey.app/theme?category=LIVE');
      setList(data);
    };
    getList();
  }, []);

  console.log('List :', list);

  return;
};

export default CategoryTheme;
