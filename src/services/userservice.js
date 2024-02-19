// const rootBackend = 'http://98.35.114.6:4000';
const rootBackend = '';

export const serviceGetUsers = async (username) => {
  const result = await fetch(`${rootBackend}/user`);
  if (result.status !== 200) {
    return {
      error: true,
      status: result.status,
      msg: result.statusText,
      data: null,
    };
  }
  const jsonData = await result.json();
  // console.log("serviceGetUsers = ", jsonData);
  if (jsonData?.length) {
    return { data: jsonData };
  }
  return null;
};

export const doesUserExist = async (username) => {
  // READ USER
  // Valid User GET keys = name, firstName, lastName, description, email, phone, phone, posts, followers, following
  const keyParam = "name";
  const valueParam = username;
  const result = await fetch(
    `${rootBackend}/user/exists?` +
      new URLSearchParams({ key: keyParam, value: valueParam })
  );

  const jsonData = await result.json();
  if (jsonData?.length) {
    return true;
  }
  return false;
};

export const addNewUser = async (userdata) => {
  const result = await fetch(`${rootBackend}/user`, {
    method: "POST",
    body: JSON.stringify(userdata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonData = await result.json();
  console.log("addNewUser = > ", jsonData);
  return { ...jsonData };
};

export const serviceUpdateUser = async (oldUser, updatedUser) => {
  await fetch(`${rootBackend}/user/modify`, {
    method: "POST",
    body: JSON.stringify({ oldData: oldUser, updatedData: updatedUser }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((t) => {
    return t.status === 200;
  });
};
