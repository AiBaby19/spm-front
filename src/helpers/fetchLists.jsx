export const fetchList = async (url) => {
    let response = await fetch(url);
    const data = await response.json();
    return data.data;
  };