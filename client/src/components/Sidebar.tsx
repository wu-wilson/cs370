import { Button } from '@chakra-ui/button';
// import { ChatIcon } from '@chakra-ui/icons';
import { Divider, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import { Tab, TabList } from '@chakra-ui/tabs';

const Sidebar = () => {
  return (
    <VStack>
      <HStack justify="space-evenly" w="100%">
        <Heading size="md">Add Friend</Heading>
        <Button>
          Add
        </Button>
      </HStack>

      <VStack as={TabList}>
        <HStack as={Tab}>
          <Text>John Doe</Text>
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Sidebar;
