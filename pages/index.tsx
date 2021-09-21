import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { dehydrate, DehydratedState, QueryClient, useQuery } from "react-query";

type UserPropsType = {
  dehydratedState: DehydratedState;
};

function Users() {
  return (
    <div>
      <div>
        <h1>Usuarios cadastrados</h1>

        <ul>
          <li>asdf</li>
        </ul>

        <Link href="/usuario/criar">Criar Usuario</Link>
      </div>
    </div>
  );
}

export default Users;
