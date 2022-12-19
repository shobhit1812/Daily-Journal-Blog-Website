export const postBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case "POST_BLOG_REQUEST": {
      return { loading: true };
    }
    case "POST_BLOG_SUCCESS": {
      return { loading: false, blog: action.payload };
    }
    case "POST_BLOG_FAILURE": {
      return { loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const allBlogsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BLOGS_REQUEST": {
      return { loading: true };
    }
    case "GET_BLOGS_SUCCESS": {
      return { loading: false, blogs: action.payload };
    }
    case "GET_BLOGS_FAILURE": {
      return { loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const blogReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BLOG_REQUEST": {
      return { loading: true };
    }
    case "GET_BLOG_SUCCESS": {
      return { loading: false, blog: action.payload };
    }
    case "GET_BLOG_FAILURE": {
      return { loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
