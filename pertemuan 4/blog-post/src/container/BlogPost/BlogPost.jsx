import React, {Component} from "react";
import './BlogPost.css'
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
    state = {               //Komponen state dari React untuk statefull component
        listArtikel: []     //variabel array untuk menyimpan data API
    }

    componentDidMount(){ //komponen yg dicek ketika telah diambil di-mount-ing
        fetch('https://jsonplaceholder.typicode.com/posts') //alamat API
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    render() {
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => { //lopping dan masukan data ke variabel artikel
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/> //mapping data JSON sesuai kategori
                    })
                }
                {/* <Post judul="JTI POLINEMA" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/> */}
            </div>
        )
    }
}

export default BlogPost;