import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFrom {
  email: string;
  firstname: string;
  lastname: string;
  address: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  //register함수는 onChange이벤트와 value, useState를 모두 대체하고,
  //onChange함수를 지니고 있다

  //watch함수는 form의 입력값들의 변화를 관찰 할 수 있게 해주는 함수이다

  //handleSubmit은 preventDefault 역활과 vaildation역활을 담당한다
  //첫번째인자는 데이터가 유효할때 실행되는 함수(필수) -> 실행된 함수의 인자에 제출한 입력값이 들어와있다
  //두번째인자는 데이터가 유요하지 않을때 실행되는 함수(필수x)

  //formState.errors에서 vaildation의 오류를 확인 할 수 있다

  //setError는 특정한 에러를 발생시키게 한다
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFrom>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onVaild = (data: IFrom) => {
    //조건대로 입력값이 들어왔다면 패스워드끼리 같은지 확인한다
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onVaild)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              //email 에러메세지 보내는법
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder='email'
        />
        {/* 에러메세지 꺼내쓰는 법 */}
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstname", {
            required: "First Name is required",
            validate: {
              noViktor: (value) =>
                value.includes("viktor") ? "no viktor allowed" : true,
              noEze: (value) =>
                value.includes("eze") ? "no eze allowed" : true,
            },
          })}
          placeholder='First Name'
        />
        <span>{errors?.firstname?.message}</span>
        <input
          //required 에러메세지 보내는법
          {...register("lastname", { required: "Last Name is required" })}
          placeholder='Last Name'
        />
        <span>{errors?.lastname?.message}</span>
        <input
          {...register("address", {
            required: "address is required",
            //minLength 에러메세지 보내는법
            minLength: { value: 5, message: "Your address is too short" },
          })}
          placeholder='Address'
        />
        <span>{errors?.address?.message}</span>
        <input
          {...register("password", {
            required: "password is required",
          })}
          placeholder='password'
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "password1 is required",
          })}
          placeholder='password1'
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
