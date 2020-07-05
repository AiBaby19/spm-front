export const itemSubmit = async (url, item) => {
  let response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  await response.json();
  // return data.data;
};

export const itemEditSubmit = async (url, id, values) => {
  let response = await fetch(`${url}/${id}`, {
    method: 'put',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  await response.json();
  // return data.data;
};

export const itemDelete = async (url, id) => {
  let response = await fetch(`${url}/${id}`, {
    method: 'delete',
  });
  await response.json();
};
