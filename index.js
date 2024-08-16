const newPost = (post, addedAt = Date()) => {
  return {
    ...post,
    addedAt,
  }
};

const firstPost = {
  id: 1,
  author: "Vasyl",
};

console.log(newPost(firstPost));
