import React, { useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useChat } from "../context/ChatContext";
import Modal from "react-modal";

export default function UserList({ onSelectUser }) {
  const { users, addUser } = useChat();
  const [newUserName, setNewUserName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserImg, setNewUserImg] = useState("");
  const handleAddUser = () => {
    if (newUserName.trim()) {
      addUser({
        id: Date.now(),
        name: newUserName,
        img: newUserImg || "https://via.placeholder.com/150",
      });
      setNewUserName("");
    }
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      width: "40%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1b1b1b",
      border: "none",
      color: "#fff",
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1b1b1b] border border-gray-600 rounded-lg shadow-md p-4 h-[85vh]"
    >
      <div className="flex items-center mb-4 justify-between">
        <h2 className="text-xl font-bold text-white">Users</h2>
        <button
          className="bg-transparent text-white font-bold text-xl rounded"
          onClick={handleOpenModal}
          title="Add User"
        >
          +
        </button>
      </div>
      <div className="overflow-y-auto h-full">
        <ul>
          {users.map((user) => (
            <motion.li
              key={user.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center mb-4 cursor-pointer text-white"
              onClick={() => onSelectUser(user)}
            >
              <div className="w-12 h-12 mr-2 bg-cover bg-center rounded-full">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {user.name}
            </motion.li>
          ))}
        </ul>
        <Modal
          isOpen={isModalOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Add User</h2>
          <input
            type="text"
            placeholder="Enter user name"
            className="w-full p-2 mb-4 bg-transparent border-b  border-gray-600 text-white"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 mb-4 bg-transparent border-b border-gray-600 text-white file-input-transparent"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setNewUserImg(reader.result); // Set the image data URL
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-600 px-2 py-1 text-white text-lg rounded"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              className="bg-transparent px-2 py-1 text-white text-lg rounded"
              onClick={handleAddUser}
            >
              Add
            </button>
          </div>
        </Modal>
      </div>
    </motion.div>
  );
}
