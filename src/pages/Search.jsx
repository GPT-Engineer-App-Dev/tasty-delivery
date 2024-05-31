import { useState } from "react";
import { Container, Input, Button, VStack, HStack, Select, Box, Text } from "@chakra-ui/react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("name");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Mock search results
    const mockResults = [
      { name: "Pizza Place", cuisine: "Italian", location: "New York" },
      { name: "Sushi Spot", cuisine: "Japanese", location: "San Francisco" },
      { name: "Burger Joint", cuisine: "American", location: "Chicago" },
    ];

    const filteredResults = mockResults.filter((restaurant) =>
      restaurant[filter].toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Select value={filter} onChange={(e) => setFilter(e.target.value)} width="30%">
            <option value="name">Name</option>
            <option value="cuisine">Cuisine</option>
            <option value="location">Location</option>
          </Select>
          <Input
            placeholder={`Search by ${filter}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            width="70%"
          />
        </HStack>
        <Button colorScheme="teal" onClick={handleSearch}>
          Search
        </Button>
      </VStack>
      <Box mt={6} width="100%">
        {results.length > 0 ? (
          results.map((restaurant, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
              <Text fontSize="xl" fontWeight="bold">
                {restaurant.name}
              </Text>
              <Text>Cuisine: {restaurant.cuisine}</Text>
              <Text>Location: {restaurant.location}</Text>
            </Box>
          ))
        ) : (
          <Text>No results found</Text>
        )}
      </Box>
    </Container>
  );
};

export default Search;