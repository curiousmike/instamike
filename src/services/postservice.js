// const rootBackend = 'http://98.35.114.6:4000';
const rootBackend = ''; // http://127.0.0.1:4000

export const getPosts = async (username) => {
  try {
    const result = await fetch(`${rootBackend}/post`);
    if (result.status !== 200) {
      return {
        error: true,
        status: result.status,
        msg: result.statusText,
        data: null,
      };
    }
    const jsonData = await result.json();
    if (jsonData?.length) {
      return { error: false, data: jsonData };
    }
  } catch (e) {
    return null;
  }
  return null;
};

export const addNewPost = async (postdata) => {
  // console.log('\n\nNew post timeStamp = ', Date.now());
  const result = await fetch(`${rootBackend}/post/create`, {
    method: "POST",
    body: JSON.stringify(postdata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonData = await result.json();
  if (result.status !== 200) {
    return {
      error: true,
      status: result.status,
      msg: result.statusText,
      data: null,
    };
  }
  return { error: false, ...jsonData };
};
    
export const deletePost = async (postdata) => {
    await fetch(`${rootBackend}/post/delete`, {
      method: "POST",
      body: JSON.stringify(postdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((t) => {
      return t.status === 200;
    });
}

export const updatePost = async (oldPost, updatedPost) => {
    await fetch(`${rootBackend}/post/modify`, {
      method: "POST",
      body: JSON.stringify({ oldData: oldPost, updatedData: updatedPost }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((t) => {
      if (t.status !== 200) {
        alert("error in network updatePost");
      }
      return t.status === 200;
    });
  }
      
