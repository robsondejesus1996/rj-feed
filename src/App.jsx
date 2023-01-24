import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Robson de Jesus"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus tenetur debitis eos harum numquam. Architecto cupiditate porro nemo? Sint iusto dolorem ad id eum fuga ullam. Doloribus, veniam labore?
            "
          />
          <Post
            author="Robson de Jesus"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus tenetur debitis eos harum numquam. Architecto cupiditate porro nemo? Sint iusto dolorem ad id eum fuga ullam. Doloribus, veniam labore?
            "
          />
        </main>
      </div>
    </div>
  );
}

export default App;
