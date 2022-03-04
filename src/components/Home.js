import image from '../images/bbd.png';

export default function Home() {

    return (
        <header className='header'>
            <div className='container'>
                <div className='text'>
                    <h1 className='h1'>Breaking Bad, tu frase diaria</h1>
                    <p className='p'>Hace click! Enteráte cual es tu frase de hoy. Lleváte una dosis diaria de tus personajes favs de Breaking Bad y Better Call Saul.</p>
                </div>
                <div className='img'>
                    <img src={image} type='image' alt='breaking bad'></img>
                </div>
            </div>
        </header>)
}