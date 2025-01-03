"use client";
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Link,
  Icon,
  Flex,
  Box,
} from "@chakra-ui/react";
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { BsInfoCircleFill } from "react-icons/bs";

import { FaLink } from "react-icons/fa";

const Certificat = (props) => {
  const { company, duration, designation, companyImg,link,lenght } =
    props.data;
    const [t, i18n ] = useTranslation();
    const linkHover = {
        fill: "blueTheme.navLinkActive",
        transition: "all ease-in-out 0.5s",
      };

  return (
    <>
      <Card my={3} transition="all .3s ease-in-out"
       backgroundColor="blueTheme.card"
        _hover={{transform:"scale(0.99)"}} width= "80vw"
          boxShadow="0 10px 30px -15px blueTheme.navShadow"
        >
        <CardBody>
          <Flex flexDirection={["column","column","row"]} alignItems="center">
            <Image
              objectFit="cover"
              src={`/images/${companyImg}`}
              alt="Company Logo"
              marginRight="1rem"
              height={["15rem","15rem","13rem"]}
              width={["15rem","15rem","13rem"]}
              margin={["2rem auto","1rem","auto 1rem"]}
              backgroundColor="white"
              display={["none","unset","unset"]}
            />
            <Box>
              <Heading fontSize="1.5rem">{t(company)}</Heading>
              <Heading size="sm" my={2}>
              {t(duration)}
              </Heading>
              <Text size="xs" my={2} fontStyle="italic">
              {t(designation)}
              </Text>
              <Text size="xs" my={2} >
              {t(lenght)}
              </Text>

              <Link href={link} target="_blank" ><span _hover={linkHover}> {t('certificat')} </span>
                <Icon as={FaLink} _hover={linkHover}/>
                </Link>

              <div
                style={{
                  marginLeft: "1.5rem",
                  fontSize: "0.95rem",
                }}
              >
              </div>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default Certificat;
