import React, { createContext, useState, useEffect } from "react";
import { message } from "antd";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { ButtonPrimary } from "../../@shared/ButtonPrimary";
import { ModalCadastro } from "../../components/Forms/ModalCadastro";
import Link from "next/link";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest } from "./util";
import { getUserLocalStorage, setUserLocalStorage, useAuth } from "./useAuth";
import { useForm } from "react-hook-form";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    return () => {
      setUser(user);
    };
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
  }

  

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default function Auth() {
  
const auth = useAuth();

async function onFinish(values: { email: string; password: string }) {
  try {
    await auth.authenticate(values.email, values.password);

    

    alert("deu certo")
  } catch (error) {
    return alert("email ou senha invalidos");
  }
}

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <S.PageContainer>
      {modal ? <ModalCadastro closeModal={openModal} /> : ""}

      <S.Container>
        <S.ContainerLogin>
          <Link href="/">
            <S.Img src="/assets/img/logoCPA.png" alt="" />
          </Link>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Input  placeholder="Email" ref={register} name="email">
            <MdOutlineAlternateEmail />
          </Input>
          <Input placeholder="Senha" ref={register} name="password">
            
            <SlLock />
          </Input>

          <span>Esqueceu a senha?</span>
          <ButtonPrimary type="submit" className="laranja">Entrar</ButtonPrimary>
          </form>
          
          <p>
            Não possui uma conta?
            <a href="#" onClick={openModal}>
              {" "}
              Cadastra-se
            </a>{" "}
          </p>
        </S.ContainerLogin>
      </S.Container>
    </S.PageContainer>
  );
}
