/* eslint-disable @next/next/no-img-element */
import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { DehydratedState, QueryClient, dehydrate, useQuery } from "react-query";
import Layout from "../../components/Layout";
import { getUser } from "../../utils/api";

type UserPropsType = {
  dehydratedState: DehydratedState;
};

export const getServerSideProps: GetServerSideProps<UserPropsType> = async (
  context
) => {
  const queryClient = new QueryClient();

  const id = context.query.userID as string;
  await queryClient.prefetchQuery(["user", id], () => getUser(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

function User() {
  const router = useRouter();
  const id = router.query.userID as string;
  const { data } = useQuery(["user", id], () => getUser(id));

  return (
    <Layout>
      <div className="flex items-center mb-6">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="https://picsum.photos/seed/picsum/200/200"
          alt=""
        />

        <h1 className="text-4xl text-gray-700 font-light">
          {data.first} {data.last}
        </h1>
      </div>

      <p>
        <span className="font-bold">Email:</span> {data.email}
      </p>
      <p>
        <span className="font-bold">Celular:</span> {data.phone}
      </p>
      <p>
        <span className="font-bold">Aniversário:</span>{" "}
        {dayjs(data.birthday).format("DD/MM/YYYY")}
      </p>
    </Layout>
  );
}

export default User;
