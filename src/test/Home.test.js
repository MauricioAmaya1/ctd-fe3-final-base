import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { Home, url } from '../Routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

test("Testeando Home", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
  const texto = await screen.findByText("Leanne Graham")
  expect(texto.textContent).toBe("Leanne Graham")
})

const fetchData = () => axios.get(url);

test('the first element of results', async () => {
  return fetchData().then(data => {
    expect(data.data.results[0].username).toBe("Bret");
  });
});