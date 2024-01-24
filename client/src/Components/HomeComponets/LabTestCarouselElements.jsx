import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';

import Slider from 'react-slick';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { GoBeaker } from "react-icons/go";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import {labTest} from '../../Media/labTest';
// Settings for the slider
import LabTestCarousalCards from './LabTestCarouselCards';
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 4.2,
  slidesToScroll: 1,
};

export default function LabTestCarouselElements() {

  const [slider, setSlider] = React.useState()


  return (
    <Box
      
      height={'15rem'}
      width={'full'}
      overflow={'hidden'}
        zIndex="0">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={1220}
        top={6}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="#5a6369"
        borderRadius="lg"
        h="35px"
        transition="all 0.4s ease"
        _hover={{ bg:"white",transition:"all 0.4s ease", boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px"}}
        _active={{}}
        onClick={() => slider?.slickPrev()}>
        <BsArrowLeftShort fontSize="35px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        borderRadius="lg"
        transition="all 0.4s ease"
        right={2}
        top={6}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="#5c656b"
        h="35px"
        _hover={{ bg:"white",transition:"all 0.4s ease", boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px"}}
        _active={{}}
        onClick={() => slider?.slickNext()}>
        <BsArrowRightShort fontSize="35px" />
      </IconButton>
      {/* Slider */}
      <Slider  {...settings} ref={(slider) => setSlider(slider)}>
        <Stack textAlign="left" h="14rem" paddingLeft="0" display="flex">
            <Flex w="100%" align="center">
                <GrAchievement/>
                <Text px="5px"> 100+ Certified Labs</Text>
            </Flex>
            <Flex w="100%" align="center">
                <BsEmojiSmile/>
                <Text  px="5px">10000 Happy Customers</Text>
            </Flex>
            <Flex w="100%" align="center">
                <GoBeaker/>
                <Text px="5px">Free Sample Collection</Text>
            </Flex>
            <Flex w="100%" align="center">
                <MdOutlineDocumentScanner/>
                <Text px="5px">Accurate Reports</Text>
            </Flex>
        </Stack>
        {labTest.map((elem, index) => (
          <LabTestCarousalCards key={elem.id} elem={elem}/>
        ))}
      </Slider>
    </Box>
  );
}