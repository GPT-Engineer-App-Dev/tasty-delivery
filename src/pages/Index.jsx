import { Container, Text, VStack, Heading, Button, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to QuickEats
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your favorite meals delivered fast and fresh.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/food-delivery.jpg" alt="Food Delivery" />
        </Box>
        <Link to="/search">
          <Button colorScheme="teal" size="lg">
            Search Restaurants
          </Button>
        </Link>
        <Link to="/order-tracking">
          <Button colorScheme="teal" size="lg">
            Track Your Order
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;