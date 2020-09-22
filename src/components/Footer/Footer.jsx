import React, { Component } from 'react'
import './FooterStyles.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1 className="logo-text">Cilsy</h1>
                        <p>Cilsy Book Online Store adalah Toko Buku online dengan koleksi buku terbanyak di Indonesia.
                        Anak perusahaan dari Cilsy One ini telah menyediakan jaringan toko buku Online. Didirikan pada tanggal 19 Maret 1992.
                        Toko buku ini berawal dari toko buku kecil berukuran 25 meter persegi di daerah Jakarta Barat.
                        </p>
                    </div>
                    <div className="footer-section "></div>
                    <div className="footer-section form">
                        <h3>Newsletter</h3>
                        <p>Dapatkan diskon s.d 50% dengan berlangganan Newsletter kami!</p>
                        <form action="">
                            <input type="text" placeholder="Alamat E-mail" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <h6>hello from bottom</h6>
                </div>
            </div>
        )
    }
}
