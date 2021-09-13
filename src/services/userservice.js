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
  // CREATE NEW USER
    // const newUser = {
    //   name: 'MegapixelsMike',
    //   firstName: 'Michael',
    //   lastName: 'Coustier',
    //   email: 'curiousmike@gmail.com',
    //   phone: '510-557-0109',
    //   password: 'encrypted',
    //   description: 'A photographer who loves astrophotography, pet photography and landscapes.  Nikon Z lover.  Computer hardware enthusiast.  Hiker.  Dog lover.  Family lover.  Enjoys a good Stephen King book.  Respects the sloth.',
    //   avatar: 'me.jpg',
    //   posts: 0,
    //   followers: [],
    //   following: [],
    // }
    const result = await fetch('/api/create/user', {
      method: 'POST',
      body: JSON.stringify(userdata),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((t) => {return (t.status === 200)});
    // const jsonData = await result.json();

    
}
  