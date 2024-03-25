import './App.css'
import Card from './components/Card'
import { products } from './data'
import AddProduct from './components/AddProduct'

function App() {
  
 
  return (
    <>
      <AddProduct></AddProduct>
      <div className='wrapper'>
        <div className='sub-wrapper'>
          <Card item = {products.product_1}></Card>
          <Card item = {products.product_2}></Card>
          <Card item = {products.product_3}></Card>
          <Card item = {products.product_4}></Card>
        </div>
      </div>
    </> 
  )
}

export default App
