import { BrowserRouter, Routes, Route } from "react-router-dom"
import Rating from './components/Rating'
import ThankYou from './components/ThankYou'

export default function App() {
  return (
    <BrowserRouter basename="/interactive-rating-component/">
      <main className="grid place-content-center padding-x-24 w-full h-[100vh] bg-very-dark-blue px-[24px]">
        <Routes>
          <Route index element={<Rating />} />
          <Route path="/thank-you/:rating" element={<ThankYou />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}