import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import WalletContextProvider from '@/components/WalletContextProvider'
import { Center, Box, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import { MovieList } from '@/components/MovieList'
import { Form } from '@/components/Form'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <WalletContextProvider>
        <NavBar />
      </WalletContextProvider>
    </div>
    <div>
      <Center>
        <Box>
          <Heading as="h1" size="l" color="white" ml={4} mt={8} >
            Add a Review
          </Heading>
          <Form />
          <Heading as="h1" size="l" color="white" ml={4} mt={8} >
            Existing Reviews
          </Heading>
          <MovieList />
        </Box>
      </Center>
    </div>
    </>
  )
}
