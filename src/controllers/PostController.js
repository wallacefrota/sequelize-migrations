import { Posts } from "../models/post.js";

async function addPost(req, res, next) {
  let id_user = 3; // id from token
  try {
    await Posts.create({
      title: "Post title",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, rem? Aliquid omnis recusandae earum deleniti fugiat cum, reprehenderit culpa mollitia nobis animi molestias ducimus, iure tempora pariatur a asperiores. Aspernatur.",
      slug: 'post-title',
      idUser: id_user,
    });

    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function getPost(req, res, next) {
  let id = 1; // from param
  try {
    const post = await Posts.findByPk(id);

    if (!post) return res.sendStatus(404);

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    const post = await Posts.findAll({ where: { id: 1 } }); // or findbypk

    if (!post) return res.sendStatus(404);

    post.title = "New Post Title"; // from req body

    await post.save();

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

async function deletePost(req, res, next) {
  let id = 1;

  try {
    const post = await Posts.findByPk(id);

    if (!post) return res.sendStatus(404);

    await post.destroy();

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

async function getAllPostByUser(req, res, next) {
  let id = 3; // from token
  try {
    const posts = await Posts.findAll(
      {
        where: {idUser: id},
        order: [['id', 'DESC']],
        limit: 10,
        offset: 0
      }
    );

    if(posts.length === 0) return res.sendStatus(404);

    return res.status(200).json(posts)
  } catch (error) {
    next(error);
  }
}

export { addPost, getPost, updatePost, deletePost, getAllPostByUser };