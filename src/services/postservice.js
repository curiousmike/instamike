export const getPosts = async (username) => {
    const result = await fetch('/api/get/posts');
    
    const jsonData = await result.json();
    if (jsonData?.length) {
        return jsonData;
    } 
    return null;
  }
  
  
export const addNewPost = async (postdata) => {
    await fetch('/api/create/post', {
    method: 'POST',
    body: JSON.stringify(postdata),
    headers: {
        'Content-Type': 'application/json',
    }
    }).then((t) => {return (t.status === 200)});
}
    
