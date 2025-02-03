import React from 'react'
import GithubSearch from './pages/GitHubSearch'
import Counter from './pages/Counter'
import Products from './pages/Products'
import PostLists from './pages/PostLists'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'

export default function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route index element= {<GithubSearch />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/blog" element={<PostLists />}/>
        </Route>
    </Routes>

      /* <Heading text="First Heading"/> {/* text must match the prop name in Heading.jsx 

      <Card title="Product One">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Assumenda quos veritatis tenetur aliquam labore, consequuntur deserunt commodi tempore sit qui aperiam est mollitia temporibus eaque, excepturi pariatur corrupti! 
        Corrupti, rerum.

        <button id='clickbutton'>Click Me!</button>
      </Card> 
      <Counter />
      <GitHubSearch /> */


    

    /*<PostLists />*/

  )
}
