import { useEffect } from "react";
import { useDisclosure, Flex, Button, VStack, Heading } from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";
import { IoMdMenu } from "react-icons/io";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { links } from "../utils/constants";
import { useTranslation } from 'react-i18next';

export default function MobileHeader({ pathname }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [t, i18n] = useTranslation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <Flex className="header-burger" >
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>

      <DrawerComponent isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems="left">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              fontWeight="extrabold"
              _hover={{ textDecoration: "none" }}
              fontSize="md"
              my={2}
              textAlign="center"
              color={pathname === link.path ? "blueTheme.navLinkActive" : ""}
            >
              {t(link.text)}
            </Link>
          ))}

          {/* Language Switcher */}
          {i18n.language === 'en' ? (
            <Button onClick={() => i18n.changeLanguage('fr')}>
              <Heading color="social.instagram" fontWeight="extrabold" fontSize="1.3rem">
                FR
              </Heading>
            </Button>
          ) : (
            <Button onClick={() => i18n.changeLanguage('en')}>
              <Heading color="social.instagram" fontWeight="extrabold" fontSize="1.3rem">
                EN
              </Heading>
            </Button>
          )}
        </VStack>
      </DrawerComponent>
    </Flex>
  );
}
