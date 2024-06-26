import Image from "next/image";
import CloseIcon from "../../public/assets/icon/ic--round-close.svg";

import { useState } from "react";

const UserList = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const removeUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);

    if (selectedIndex >= newUsers.length) {
      setSelectedIndex(0);
    }
  };

  const nextUser = () => {
    setSelectedIndex((selectedIndex + 1) % users.length);
  };

  const prevUser = () => {
    setSelectedIndex((selectedIndex - 1 + users.length) % users.length);
  };
  return (
    <ul className="flex flex-col items-center gap-2">
      {users?.length > 0 ? (
        <>
          {users?.map((user, index) => (
            <li
              key={index}
              className={`flex ${
                index === selectedIndex
                  ? "bg-cyan-600 font-bold"
                  : "font-base"
              } p-2 border-sky-900 rounded-lg w-full items-center text-white`}
            >
              <Image
                unoptimized
                width={10}
                height={10}
                className="w-10 transition ease-in-out hover:scale-125 mr-auto rounded-full object-cover"
                src={user?.avatar}
                alt={user?.username}
              />
              <span className="mr-auto">{user?.username}</span>
              <button onClick={() => removeUser(index)}>
                <Image
                  unoptimized
                  className="w-8 transition ease-in-out hover:scale-125 ml-auto"
                  src={CloseIcon}
                  alt="close icon"
                  width={10}
                  height={10}
                />
              </button>
            </li>
          ))}
          <div className="text-sky-20 flex gap-4 pt-16">
            <button className="py-2 px-4 border border-sky-20 rounded-lg w-24" onClick={prevUser}>
              Usuario anterior
            </button>
            <button className="bg-sky-600 w-24 rounded-lg" onClick={nextUser}>Siguiente usuario</button>
          </div>
        </>
      ) : (
        <div className="text-sky-950 text-center">
          No hay usuarios en la sala
        </div>
      )}
    </ul>
  );
};

export default UserList;
