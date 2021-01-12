import React, { Component } from 'react';
import './App.css';
import MenuAyam from './components/MenuDagingAyam/MenuAyam'
import MenuSapi from './components/MenuDagingSapi/MenuSapi'

class App extends Component {
  constructor() {
    super()
    this.state = {
      namaResto: 'Meal Shop',
      menuAyam: [
        { nama: 'Ayam Bakar', harga: 25000, stock: 10 },
        { nama: 'Ayam Goreng', harga: 22000, stock: 0 },
        { nama: 'Sosis Bakar Rasa Ayam', harga: 3000, stock: 287 },
        { nama: 'Sate Ayam', harga: 15000, stock: 17 },
      ],
      menuSapi: [
        { id: 1, nama: 'Soto Daging',    harga: 21000 },
        { id: 2, nama: 'Sate Daging Sapi', harga: 20000 },
        { id: 3, nama: 'Sosis Bakar Rasa Sapi',    harga: 5000 },
      ],
      namaPembeli: '',
      keterangan: '',
      jenisPembayaran: ''
    }
  }
 
  handleGantiNama = (nama) => {
    this.setState({ namaResto: nama})
  }

  handleChangeNamaPembeli = (event) => {
    this.setState({ namaPembeli: event.target.value })
  }

  handleChangeKeterangan = (event) => {
    this.setState({ keterangan: event.target.value})
  }

  handleChangeJenisPembayaran = (event) => {
    this.setState({ jenisPembayaran: event.target.value })
  }

  handleChange = (event) => {
    var name  = event.target.name
    var value = event.target.value
    this.setState({ [name] : value })
  }

  render() {
    return (
      <div className="App">
        <h1>Resto {this.state.namaResto}</h1>
        <button className="btn btn-primary" onClick={() => this.handleGantiNama('Daging Lembut')}>Ganti Nama Resto</button>
        <div className="row" style={{marginTop: '10px'}}>
          <div className="col-md-4 col-md-offset-4">
          <form>
            <div className="form-group">
              <label>Nama Pembeli:  </label>
              <input 
                className="form-control" 
                name="namaPembeli" 
                onChange={this.handleChange}
                value={this.state.namaPembeli}
              />
              
              <br />
              <label>keterangan:  </label>
              <textarea 
                className="form-control"
                name="keterangan" 
                onChange={this.handleChange}
                value={this.state.keterangan}  
              />
              
              <br />
              <label>Jenis Pembayaran:</label>
              <select 
                  className="form-control"
                  name="jenisPembayaran"
                  value={this.state.value} 
                  onChange={this.handleChange}
              >
                  <option value="cash">Cash</option>
                  <option value="kartuKredit">Kartu Kredit</option>
                  <option value="voucher">Voucher</option>
              </select>
              
            </div>

          </form>
          </div>
        </div>

        <h2 className="header-menu">Menu Ayam</h2>
          <MenuAyam 
            namaMenu={this.state.menuAyam[0].nama} 
            hargaMenu={this.state.menuAyam[0].harga}
            stock={this.state.menuAyam[0].stock}  
          />
          <MenuAyam 
            namaMenu={this.state.menuAyam[1].nama} 
            hargaMenu={this.state.menuAyam[1].harga} 
            stock={this.state.menuAyam[1].stock}  
          />
          <MenuAyam 
            namaMenu={this.state.menuAyam[2].nama} 
            hargaMenu={this.state.menuAyam[2].harga} 
            stock={this.state.menuAyam[2].stock}  
          />
          <MenuAyam 
            namaMenu={this.state.menuAyam[3].nama} 
            hargaMenu={this.state.menuAyam[3].harga} 
            stock={this.state.menuAyam[3].stock}  
          />
          
        <h2>Menu Sapi</h2>
          { this.state.menuSapi.map((menu) => 
            <MenuSapi
              key={menu.id}
              namaMenu={menu.nama} 
              hargaMenu={menu.harga}
            />
          )}
      </div>
    );
  }
}

export default App;
