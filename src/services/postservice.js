export const getPosts = async (username) => {
    try {
        const result = await fetch('/api/get/posts');
        if (result.status !== 200) {
            return { error: true, status: result.status, msg: result.statusText, data: null };
        }
        const jsonData = await result.json();
        if (jsonData?.length) {
            return {error: false, data: jsonData};
        } 
    } catch (e) {
        return null;
    }
    return null;
  }
  
  
export const addNewPost = async (postdata) => {
    // console.log('\n\nNew post timeStamp = ', Date.now());
    await fetch('/api/create/post', {
    method: 'POST',
    body: JSON.stringify(postdata),
    headers: {
        'Content-Type': 'application/json',
    }
    }).then((t) => {return (t.status === 200)});
}
    
export const deletePost = async (postdata) => {
    await fetch('/api/delete/post', {
    method: 'POST',
    body: JSON.stringify(postdata),
    headers: {
        'Content-Type': 'application/json',
    }
    }).then((t) => {return (t.status === 200)});
}

export const updatePost = async (oldPost, updatedPost) => {
    await fetch('/api/modify/post', {
        method: 'POST',
        body: JSON.stringify({oldData: oldPost, updatedData: updatedPost}),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((t) => { return (t.status === 200)});
  }
      
