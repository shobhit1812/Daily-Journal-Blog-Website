import axios from "axios"

export const postBlog = (blogInfo) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "POST_BLOG_REQUEST",
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post(
      "https://blogg-backend.onrender.com/api/blog",
      blogInfo,
      config
    )

    dispatch({
      type: "POST_BLOG_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "POST_BLOG_FAILURE",
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : "Blog Post Failure",
    })
  }
}

export const getAllBlogs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_BLOGS_REQUEST",
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      "https://blogg-backend.onrender.com/api/blog",
      config
    )

    dispatch({
      type: "GET_BLOGS_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "GET_BLOGS_FAILURE",
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : "Blogs Fetch Failure",
    })
  }
}

//get single blog

export const getBlog = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_BLOG_REQUEST",
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      `https://blogg-backend.onrender.com/api/blog/${id}`,
      config
    )

    dispatch({
      type: "GET_BLOG_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "GET_BLOG_FAILURE",
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : "Blogs Fetch Failure",
    })
  }
}
