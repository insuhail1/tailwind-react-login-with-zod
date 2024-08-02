import React, { useState } from "react";
import { IPost, Post } from "./Post";
import { Modal } from "components/Modal";
import { Login } from "components/Login";
import { Register } from "components/Register";

export interface IPosts {
  posts: IPost[];
}
enum MODALS {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

const AuthModal = ({
  selectedModal,
  onClose,
  toggleSelectedModal,
}: {
  selectedModal?: MODALS;
  onClose: () => void;
  toggleSelectedModal: () => void;
}) => {
  return (
    <Modal isOpen={selectedModal !== undefined} onClose={onClose}>
      <>
        {selectedModal === MODALS.LOGIN && (
          <Login onRegisterClick={toggleSelectedModal} />
        )}
        {selectedModal === MODALS.REGISTER && (
          <Register onLoginClick={toggleSelectedModal} />
        )}
      </>
    </Modal>
  );
};

export const Posts: React.FC<IPosts> = ({ posts }) => {
  const [selectedModal, setSelectedModal] = useState<MODALS>();

  function onClick() {
    setSelectedModal(MODALS.LOGIN);
  }

  function closeModal() {
    setSelectedModal(undefined);
  }
  function toggleSelectedModal() {
    setSelectedModal((prev) =>
      prev === MODALS.LOGIN ? MODALS.REGISTER : MODALS.LOGIN
    );
  }

  return (
    <>
      <AuthModal
        selectedModal={selectedModal}
        onClose={closeModal}
        toggleSelectedModal={toggleSelectedModal}
      />
      <div className="text-textSecondary p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold">Hello Jane</h1>
          <p className="text-gray-400 mt-2">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>

          <div className="mt-8">
            <div className="bg-backgroundSecondary p-4 rounded-lg shadow-md border border-borderPrimary">
              <h2 className="text-xl font-semibold">Create post</h2>
              <div className="mt-4 flex items-center bg-backgroundPrimary p-4 rounded-lg">
                <span className="text-2xl rounded-full bg-backgroundSecondary py-2 px-3">
                  💬
                </span>
                <input
                  type="text"
                  placeholder="How are you feeling today?"
                  className="ml-2 w-full bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="flex justify-end items-end">
                <button
                  className="px-10 py-3 bg-primaryButton hover:bg-blue-400 rounded-md text-white mt-3"
                  onClick={onClick}
                >
                  Post
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {posts.map((post) => (
              <Post {...post} key={post.authorName} onClick={onClick} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
