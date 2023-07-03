import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);

  const closeModal = () => setModal(false);
  return (
    <main>
      <h1>Modal:</h1>
      {modal ? (
        <Modal onClick={closeModal} />
      ) : (
        <button onClick={openModal}>open</button>
      )}
    </main>
  );
}

export default App;
