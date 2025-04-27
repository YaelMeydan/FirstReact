
import { PropsWithChildren } from "react";
import './App.scss'

function App() {
  

  return (
    <>
       <Main title="What's new?">
      </Main>
    </>
  )
}


type MainProps = PropsWithChildren<{
  title: string;
}>;

function Main({ title, children }: MainProps) {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
}


export default App
