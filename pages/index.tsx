import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { dehydrate, DehydratedState, QueryClient, useQuery } from "react-query";
import Layout from "../components/Layout";
import { getUsers } from "../utils/api";
import dayjs from "dayjs";
import Button from "../components/Button";

type UserPropsType = {
  dehydratedState: DehydratedState;
};

export const getServerSideProps: GetServerSideProps<UserPropsType> =
  async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("users", getUsers);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  };

function Users() {
  const { data } = useQuery("users", getUsers);

  return (
    <Layout>
      <div>
        <h1 className="text-2xl mb-4">Usuarios cadastrados</h1>

        <ul className="mb-8">
          {data?.map((user) => (
            <li className="mb-2" key={user.id}>
              <Link href={`/usuario/${user.id}`}>
                <a className="block w-full py-2 px-4 border-2 rounded-md">
                  <p className="text-lg font-semibold text-gray-700">
                    {user.first} {user.last}
                  </p>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <p>{dayjs(user.birthday).format("DD/MM/YYYY")}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <Button isFull href="/usuario/criar">
          Criar usuário
        </Button>
      </div>
    </Layout>
  );
}

export default Users;
