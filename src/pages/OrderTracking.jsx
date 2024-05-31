import { useState, useEffect } from "react";
import { Container, Box, Text, VStack, HStack, Spinner, Progress } from "@chakra-ui/react";

const OrderTracking = () => {
  const [orderStatus, setOrderStatus] = useState("Preparing");
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const statuses = ["Preparing", "Cooking", "Out for Delivery", "Delivered"];
    const intervals = [2000, 4000, 6000, 8000];

    const updateStatus = (index) => {
      if (index < statuses.length) {
        setOrderStatus(statuses[index]);
        setProgress((index + 1) * 25);
        setTimeout(() => updateStatus(index + 1), intervals[index]);
      }
    };

    updateStatus(0);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Order Tracking
        </Text>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="md">
          <HStack justifyContent="space-between">
            <Text>Status: {orderStatus}</Text>
            {orderStatus !== "Delivered" && <Spinner />}
          </HStack>
          <Progress value={progress} size="sm" mt={4} />
        </Box>
      </VStack>
    </Container>
  );
};

export default OrderTracking;