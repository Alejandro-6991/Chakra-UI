import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';


function App() {
  return (
    <ChakraProvider>
      <Header />
      {/**/}
    </ChakraProvider>
  );
}

export default App;
