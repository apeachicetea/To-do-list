import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IFrom {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit } = useForm<IFrom>();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const handleVaild = ({ toDo }: IFrom) => {
    setToDos((prev) => [{ text: toDo, id: Date.now(), category }, ...prev]);
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
