import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DunatChart from "components/DunatCharts";


function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className="text-primary py=3" > Dashboard de vendas</h1>
      </div>
      <div className='row px=2'>
        <div className='col-sm-6'>
          <h5 className='text-center text-secundary'>Taxa de sucesso</h5>
          <BarChart />
        </div>

        <div className='col-sm-6'>
          <h5 className='text-center text-secundary'>Todas as vendas</h5>
          <DunatChart />
        </div>

        <div className="py=3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
