import React, {useState, useEffect} from "react"
import "./index.css";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import Footer from "./components/Footer";

const App = () => {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('shoppinglist')) || [])
  }, [])


  const setAndSaveItems = ( newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  } 
 
  // handling change
  const handleCheck = (id) => {
    const listItems = items.map (
      (item) => item.id === id ? { ...item, checked: !item.checked } : item
    )
    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header
        title="GroceryShop"
      />

      <AddItem
        newItem = { newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
      
    </div>
  ); 
};



export default App;

