import React from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import useForm from "../../utils/useForm";

function CreateUser() {
  const { register } = useForm();

  return (
    <div className="py-6 px-10">
      <div className="m-auto max-w-3xl">
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

        <Button isFull>Criar</Button>
      </div>
    </div>
  );
}

export default CreateUser;
