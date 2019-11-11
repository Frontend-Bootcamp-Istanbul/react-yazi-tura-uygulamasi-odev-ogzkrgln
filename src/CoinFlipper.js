import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "tura",
        donuyor: false,
        turaGelenToplam: 0,
        yaziGelenToplam: 0,
        toplamAtis: 0
    }
  }
  atisYap = () => {
    // atış sonucunda gelen değeri alıyoruz, 0 ise tura, 1 ise yazı
    const atisSonucu = Math.round(Math.random())

    if(atisSonucu == 0) {
      // tura geldi ise, tura gelen toplamı bir arttırıyoruz
      this.setState({
        turaGelenToplam: this.state.turaGelenToplam + 1,
        side: "tura" })

        

    }else if(atisSonucu == 1) {
      // yazi geldi ise, yazı gelen toplamı bir arttırıyoruz
      this.setState({ yaziGelenToplam: this.state.yaziGelenToplam + 1,
      side: "yazi"})
    }
    // atış yapıldığı için toplam atış sayısını bir arttırıyoruz
    this.setState({toplamAtis: this.state.toplamAtis + 1})

    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState({donuyor: true});
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({donuyor: false}), 1000);
  };

  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.atisYap} >At!</button>
        <p>
            Toplam
            <strong> {this.state.toplamAtis} </strong>
            atıştan 
            <strong> {this.state.turaGelenToplam} </strong>
            ü tura
            <strong> {this.state.yaziGelenToplam} </strong>
            si yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;