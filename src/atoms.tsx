import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    //interfacer에서 [key: string]이라고 명시를 안해준다면,
    //타입스크립트는 toDostate는 to_do | doing | done 세가지 선택지만
    //있다고 생각하기 때문에 위와 같이 string타입의 키를 가지고 스트링타입으로
    //이루어진 배열을 가진다고 만들어주면된다.
    "To Do": ["viktor", "ezereal"],
    Doing: ["blitz", "lux"],
    Done: ["nunu"],
  },
});
