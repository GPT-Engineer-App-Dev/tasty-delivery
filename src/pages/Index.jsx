import { Container, Text, VStack, Heading, Button, Image, Box } from "@chakra-ui/react";

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
        <Button colorScheme="teal" size="lg">
          Order Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;