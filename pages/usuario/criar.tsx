import React from "react";
import { useMutation } from "react-query";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import TextField from "../../components/TextField";
import { createUser } from "../../utils/api";
import useForm from "../../utils/useForm";
import { useRouter } from "next/router";
import { UserDoc } from "../../types/User";

function CreateUser() {
  const router = useRouter();
  const { register, formState, validate } = useForm();
  const { mutate, isLoading } = useMutation(createUser, {
    onSuccess: (data) => router.push(`/usuario/${data.id}`),
  });

  const submit = async () => {
    const isValid = validate(["first", "last", "phone", "email", "birthday"]);
    if (!isValid) {
      return;
    }

    mutate(formState as unknown as UserDoc);
  };

  return (
    <Layout>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <h1 className="text-2xl mb-4">Criar usuario</h1>

        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4">
            <TextField
              type="text"
              name="firstName"
              label="Nome"
              {...register("first")}
              isRequired
            />
            <TextField
              type="text"
              name="lastName"
              label="Sobrenome"
              {...register("last")}
              isRequired
            />
          </div>
          <div className="grid gap-4">
            <TextField
              type="phone"
              name="phone"
              label="Celular"
              isRequired
              mask={{
                blocks: [2, 5, 4],
                delimiters: [" ", "-"],
                numericOnly: true,
              }}
              {...register("phone")}
            />
            <TextField
              type="email"
              name="email"
              label="Email"
              {...register("email")}
              isRequired
            />
            <TextField
              type="date"
              name="birthday"
              label="Aniversário"
              {...register("birthday")}
              isRequired
            />
          </div>
        </div>

        {isLoading ? <p className="text-gray-700 py-2">Carregando...</p> : null}

        <Button type="submit" isDisabled={isLoading} isFull>
          Criar
        </Button>
      </form>
    </Layout>
  );
}

export default CreateUser;
