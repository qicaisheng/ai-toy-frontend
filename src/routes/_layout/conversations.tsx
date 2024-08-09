import {
  Button,
  Container,
  Flex,
  Heading,
  VStack,
  HStack,
  Divider,
  Box,
  Input,
  Text,
  SkeletonText,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import React, { useState } from 'react';
import Navbar from "../../components/Common/Navbar"
import AddItem from "../../components/Items/AddItem"

const itemsSearchSchema = z.object({
  page: z.number().catch(1),
})

export const Route = createFileRoute("/_layout/conversations")({
  component: ConversationsPage,
})



interface Message {
  sender: 'user' | 'bot';
  text: string;
}

function Conversations() {
  const messages: Message[] = [
    { sender: 'user', text: 'Hello, bot!' },
    { sender: 'bot', text: 'Hi there! How can I assist you today?' },
    { sender: 'user', text: 'Can you tell me a joke?' },
    { sender: 'bot', text: 'Sure! Why don’t scientists trust atoms? Because they make up everything!' },
  ];

  const [input, setInput] = useState('');

  const handleSend = () => {

  };

  return (
    <Container maxW="container.sm" py={4}>
    <VStack spacing={4} align="stretch" height="80vh" borderWidth="1px" borderRadius="md" overflow="hidden">
      <Box flex="1" overflowY="auto" p={4} bg="gray.50" borderColor="gray.200" borderWidth="1px">
        {messages.map((msg, index) => (
          <Box key={index} mb={2} p={2} borderRadius="md" bg={msg.sender === 'user' ? 'blue.100' : 'gray.100'}>
            <Text>{msg.text}</Text>
          </Box>
        ))}
      </Box>
      <Divider />
      <HStack p={4} spacing={2}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          variant="outline"
          flex="1"
        />
        <Button onClick={handleSend} colorScheme="blue">
          Send
        </Button>
      </HStack>
    </VStack>
  </Container>
  )
}


function ConversationsPage() {
  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
        Conversations
      </Heading>

      <Conversations />
    </Container>
  )
}
