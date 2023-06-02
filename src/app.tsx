import { FC } from 'react'
import { Routes, Route } from 'react-router'
import { Layout } from './components/layout/layout'
import { Home } from './pages/home'
import { GoodsDetail } from './pages/goods-detail/goods-detail'
import { Cart } from './pages/cart/cart'
import { Goods } from './pages/goods/goods'
import { Gallery } from './pages/gallery/gallery'

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/goods/:itemId" element={<GoodsDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
export default App
