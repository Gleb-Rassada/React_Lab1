import styles from "./App.module.css";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";

function App() {
   return (
      <>
         <Header />
         <ServiceCard className={styles.margins} />
      </>
   );
}

export default App;
