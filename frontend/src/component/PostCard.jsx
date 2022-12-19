import React from "react";
import { Badge, Button, Card, Col, Image, Row } from "react-bootstrap";
import { MdDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const PostCard = ({ item }) => {
  var date = moment(item.date).format("DD-MM-YYYY");
  const navigate = useNavigate();

  return (
    <Card className="p-2 mb-2" onClick={() => navigate(`/blog/${item._id}`)}>
      <Row>
        {/* image */}

        <Col sm={6}>
          <Image src={item.picture} alt="blog" fluid />
        </Col>

        {/* 2nd grp */}
        <Col md={6} sm={12}>
          <Col sm={12} className="mt-2">
            <h6 style={{ color: "#1f2937" }}>
              {item.title}
              {"   "}
              <span>
                <Badge pill bg="success">
                  {item.category}
                </Badge>
              </span>
            </h6>{" "}
          </Col>
          <Col sm={12}>{item.desc.substr(0, 80)}...</Col>
          <Row className="align-items-center d-flex justify-content-end">
            <Col
              sm={6}
              className="pt-2"
              xs={6}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <MdDateRange /> <small>{date}</small>
            </Col>
            <Col sm={6} xs={6} className="pt-2">
              <Button style={{ padding: "0.2rem 0.4rem", borderRadius: "3px" }}>
                Read More
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default PostCard;
