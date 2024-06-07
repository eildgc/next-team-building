import Image from "next/image";

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
    <ul className="flex flex-col justify-start items-center gap-2 rounded-lg bg-sky-50 p-2">
      {users.length > 0 ? (
        <>
          {users.map((user, index) => (
            <li
              key={index}
              className={` flex ${
                index === selectedIndex
                  ? "bg-cyan-500 text-white"
                  : "text-sky-950"
              } p-2 border-sky-900 rounded-lg w-full items-start`}
            >
              <Image
                unoptimized
                width={10}
                height={10}
                className="w-10 transition ease-in-out hover:scale-125 mr-auto rounded-full object-contain"
                src={user.avatar}
                alt={user.username}
              />
              <span className="mr-auto">{user.username}</span>
              <button onClick={() => removeUser(index)}>
                <Image
                  unoptimized
                  className="w-8 transition ease-in-out hover:scale-125 ml-auto"
                  src="./assets/icon/ic--round-close.svg"
                  alt=""
                  width={10}
                  height={10}
                />
              </button>
            </li>
          ))}
          <div className="text-sky-950 flex gap-4 pt-16">
            <button className="py-2 px-4 border border-sky-950 rounded-lg w-24" onClick={prevUser}>
              Usuario anterior
            </button>
            <button className="bg-sky-400 w-24 rounded-lg" onClick={nextUser}>Siguiente usuario</button>
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
