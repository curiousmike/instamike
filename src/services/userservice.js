export const getUsers = async (username) => {
  try {
    const result = await fetch('/api/get');
    const jsonData = await result.json();
    if (jsonData?.length) {
        return jsonData;
    } 
  } catch (e) {
    return null;
  }
  return null;
}

export const doesUserExist = async (username) => {
    // READ USER
    // Valid User GET keys = name, firstName, lastName, description, email, phone, phone, posts, followers, following
    const keyParam = 'name';
    const valueParam = username;
    const result = await fetch('/api/get/user?' + new URLSearchParams({key: keyParam, value: valueParam}));
    
    const jsonData = await result.json();
    if (jsonData?.length) {
        console.log(`doesUserExist = ${username} = TRUE`);
        return true;
    } 
    console.log(`doesUserExist = ${username} = FALSE`);
    return false;
}

export const addNewUser = async (userdata) => {
    await fetch('/api/create/user', {
      method: 'POST',
      body: JSON.stringify(userdata),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((t) => {return (t.status === 200)});
}
  
export const updateUser = async (oldUser, updatedUser) => {
  await fetch('/api/modify/user', {
      method: 'POST',
      body: JSON.stringify({oldData: oldUser, updatedData: updatedUser}),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((t) => { return (t.status === 200)});
}
