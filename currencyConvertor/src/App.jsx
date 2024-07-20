import "./App.css";
import CurrencyConvertor from "./components/CurrencyConvertor";


function App() {
   return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center pb-6"
    style={{backgroundImage : `url(https://xtb.scdn5.secure.raxcdn.com/kb_main_photo/0102/92/9ecbe35a-70bc-4b2e-80aa-74c65b57e09f/kb_main_photo_front/1-trading-what-is-it.png)`,}
    }>
        <div className="container">
           <CurrencyConvertor/>
        </div>   
    </div>
   );
}

export default App