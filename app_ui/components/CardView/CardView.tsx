import React from "react";
import Image from "next/image";

import "animate.css";

import { Button, Card, Col, Grid, Row, Text, Tooltip } from "@nextui-org/react";
import { CardStyled } from "./styles-card";
import { IProduct } from "@/pages/my-works-web";
import Link from "next/link";

export interface CardViewProps {
  item: IProduct;
  index: number;
}

const CardView = ({ item, index }: CardViewProps) => {
  return (
    <Grid xs={9} sm={4} md={4} key={index}>
      <div className="animate__animated animate__fadeIn">
        <CardStyled>
          <Card css={{ w: "100%", h: "220px" }}>
            <Card.Header
              css={{ position: "absolute", zIndex: 1, top: 5 }}
            ></Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.imgSrc}
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
              />
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop:
                  "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Text
                    size={15}
                    weight="bold"
                    transform="uppercase"
                    color="#634594"
                  >
                    {item.name}
                  </Text>
                  <Text color="#000" size={10}>
                    {item.technologies}
                  </Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Tooltip content={item.technologies} color="error">
                      <Link href={item.url} target="_blank">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            VIEW
                          </Text>
                        </Button>
                      </Link>
                    </Tooltip>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </CardStyled>
      </div>
    </Grid>
  );
};
export default CardView;
