import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IFrom {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit } = useForm<IFrom>();
  const setToDos = useSetRecoilState(toDoState);
  const handleVaild = ({ toDo }: IFrom) => {
    setToDos((prev) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(handleVaild)}>
      <input
        {...register("toDo", {
          required: "toDo is required",
        })}
        placeholder='Write a to do..'
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
