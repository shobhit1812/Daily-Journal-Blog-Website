import React from "react"
import { useEffect } from "react"
import { Button, ButtonGroup, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../component/Header"
import { getBlog } from "../store/actions/blogAction"
import { BiArrowBack } from "react-icons/bi"
import { ThreeDots } from "react-loader-spinner"
import Message from "../component/Message"
import BlogInfo from "../component/BlogInfo"
import axios from "axios"

const Blog = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { blog, loading, error } = useSelector((state) => state.getBlog)
  const { userInfo } = useSelector((state) => state.userLogin)

  useEffect(() => {
    try {
      dispatch(getBlog(params.id))
    } catch (error) {
      console.log(error)
    }
  }, [dispatch, params])

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://blogg-backend.onrender.com/api/blog/${blog._id}`
      )
      alert("Blog is deleted")
      navigate("/home")
    } catch (error) {
      console.log("Unable to delete")
    }
  }

  return (
    <div>
      <Header />
      <Container className='mt-2'>
        {/* go back */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Button
              variant='primary'
              style={{
                padding: "0.3rem 0.6rem",
                borderRadius: "0.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
              onClick={() => navigate("/home")}
            >
              <BiArrowBack /> Go Back
            </Button>
          </div>

          {blog && blog.userId === userInfo._id && (
            <ButtonGroup>
              <Button
                variant='danger'
                style={{
                  padding: "0.3rem 0.6rem",
                  borderRadius: "0.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </ButtonGroup>
          )}
        </div>

        {/* blog */}

        {loading && <ThreeDots color='#EDDFB3' height={80} width={80} />}
        {error && <Message variant='danger' message={error} />}
        <div>
          <BlogInfo detail={blog ? blog : ""} />
        </div>
      </Container>
    </div>
  )
}

export default Blog
